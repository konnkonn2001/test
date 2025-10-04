// 楽天GORA ゴルフ場一覧取得API
// APIキーはご自身のものに変更してください
const API_KEY = '1067411969017260371';
const BASE_URL = 'https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623';

export async function fetchGolfCourses(params = {}) {
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
}
