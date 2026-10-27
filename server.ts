import express, { Request, Response } from 'express';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Server-side Gemini initialization
const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is missing from process.env');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// API Endpoint: Parse report text or image into a structured dynamic infographic JSON
app.post('/api/gemini/parse-infographic', async (req: Request, res: Response): Promise<void> => {
  try {
    const { rawText, imageBase64, mimeType } = req.body;

    if (!rawText && !imageBase64) {
      res.status(400).json({ error: 'Vui lòng cung cấp văn bản hoặc hình ảnh báo cáo.' });
      return;
    }

    const ai = getAiClient();

    const systemInstruction = `
Bạn là chuyên gia thiết kế và phân tích Infographic dữ liệu.
Nhiệm vụ của bạn là chuyển đổi văn bản báo cáo hoặc ảnh chụp báo cáo thành cấu trúc Infographic Động có số liệu nhảy (animated counters).
Trích xuất tiêu đề chính, phụ đề, các phần (sections), và từng con số thống kê chính (items) có giá trị mục tiêu (targetValue), tiền tố (prefix), hậu tố (suffix), đơn vị (unit), mô tả ngắn, và dữ liệu chi tiết nếu có.

Định dạng JSON yêu cầu:
{
  "id": "generated-infographic",
  "title": "TIÊU ĐỀ BÁO CÁO VIẾT HOA",
  "subtitle": "Mô tả ngắn gọn phạm vi và ý nghĩa báo cáo",
  "sourceNotes": "Ghi chú nguồn dữ liệu",
  "updatedAt": "Thời gian báo cáo",
  "sections": [
    {
      "id": "sec-1",
      "title": "TÊN PHẦN CẢI CÁCH HOẶC CHỦ ĐỀ",
      "subtitle": "Mô tả mục tiêu của phần này",
      "badgeBgColor": "bg-sky-600",
      "borderColor": "border-sky-500",
      "items": [
        {
          "id": "item-1",
          "title": "Tên chỉ số",
          "targetValue": 145000,
          "prefix": "",
          "suffix": "",
          "unit": "biên chế",
          "description": "mô tả hành động hoặc kết quả",
          "subText": "thông tin bổ sung ngữ cảnh",
          "iconType": "personnel",
          "trend": "down",
          "color": "blue"
        }
      ]
    }
  ]
}

Quy tắc:
1. iconType thuộc một trong các chuỗi: "personnel", "savings", "portal", "clock", "cost", "education", "tech", "energy", "chart".
2. color thuộc một trong: "blue", "emerald", "amber", "indigo", "purple", "rose".
3. trend thuộc một trong: "up", "down", "neutral".
4. targetValue bắt buộc phải là DẠNG SỐ (number). Nếu số liệu gốc là "145.000", targetValue = 145000. Nếu là "53%", targetValue = 53, suffix = "%".
5. Tất cả ngôn ngữ sử dụng tiếng Việt chuẩn.
`;

    const contents: any[] = [];

    if (imageBase64) {
      contents.push({
        inlineData: {
          data: imageBase64,
          mimeType: mimeType || 'image/png',
        },
      });
    }

    if (rawText) {
      contents.push({ text: `Hãy chuyển đổi báo cáo sau thành Infographic Động:\n\n${rawText}` });
    } else {
      contents.push({ text: 'Hãy phân tích hình ảnh này và chuyển đổi thành Infographic Động đầy đủ các con số thống kê.' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            title: { type: Type.STRING },
            subtitle: { type: Type.STRING },
            sourceNotes: { type: Type.STRING },
            updatedAt: { type: Type.STRING },
            sections: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  subtitle: { type: Type.STRING },
                  badgeBgColor: { type: Type.STRING },
                  borderColor: { type: Type.STRING },
                  items: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.STRING },
                        title: { type: Type.STRING },
                        targetValue: { type: Type.NUMBER },
                        prefix: { type: Type.STRING },
                        suffix: { type: Type.STRING },
                        unit: { type: Type.STRING },
                        description: { type: Type.STRING },
                        subText: { type: Type.STRING },
                        iconType: { type: Type.STRING },
                        trend: { type: Type.STRING },
                        color: { type: Type.STRING },
                      },
                      required: ['id', 'title', 'targetValue', 'unit', 'description', 'iconType'],
                    },
                  },
                },
                required: ['id', 'title', 'items'],
              },
            },
          },
          required: ['id', 'title', 'subtitle', 'sections'],
        },
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error('Gemini không phản hồi dữ liệu.');
    }

    const parsedData = JSON.parse(jsonText);
    res.json({ success: true, data: parsedData });
  } catch (error: any) {
    console.error('Lỗi Gemini Parse Infographic:', error);
    res.status(500).json({
      error: error?.message || 'Có lỗi xảy ra khi xử lý bằng Gemini AI.',
    });
  }
});

// Serve Vite dev server or static assets
async function setupServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port: Number(PORT) },
      appType: 'custom',
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = await vite.transformIndexHtml(
          url,
          `<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infographic Động - Nhảy Số Cải Cách & Phát Triển</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
        );
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
  });
}

setupServer();
