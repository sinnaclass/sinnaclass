import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://your-project-url.supabase.co"; // 대시보드에서 복사
const supabaseKey = "your-anon-public-api-key"; // 대시보드에서 복사
export const supabase = createClient(supabaseUrl, supabaseKey);

// projects 테이블의 모든 데이터 조회
const { data, error } = await supabase.from("projects").select("*");
if (error) {
  console.error("데이터 패칭 실패", error);
} else {
  console.log("데이터 패칭 성공", data);
}

// WHERE id = 1, 특정 컬럼만 조회
await supabase.from("projects").select("name, description").eq("id", 1);

// projects 테이블에 데이터 추가
const { data, error } = await supabase.from("projects").insert({ name: "Project A", description: "설명" });
