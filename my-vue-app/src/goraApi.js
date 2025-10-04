// 楽天GORA ゴルフ場一覧取得API
// APIキーはご自身のものに変更してください
const API_KEY = '1067411969017260371';
const BASE_URL = 'https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623';

export async function fetchGolfCourses(params = {}) {
  // モックデータ返却
  return {
    Items: [
      {
        Item: {
          golfCourseId: '10001',
          golfCourseName: 'モックゴルフ場A',
          address: '東京都千代田区1-1-1',
          telephone: '03-1234-5678'
        }
      },
      {
        Item: {
          golfCourseId: '10002',
          golfCourseName: 'モックゴルフ場B',
          address: '大阪府大阪市2-2-2',
          telephone: '06-2345-6789'
        }
      }
    ]
  }
  // 実API呼び出し（開発時はコメントアウト）
  /*
  const query = new URLSearchParams({
    applicationId: API_KEY,
    ...params
  });
  const url = `${BASE_URL}?${query}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('APIリクエスト失敗');
    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
  */
}
