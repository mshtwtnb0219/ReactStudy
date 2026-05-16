import { useState } from "react";

export const Records = () => {
  const records = [
    {
      title: "学習の記録1",
      time: 1,
    },
  ];

  // 学習内容
  const [studyContent, setStudyContent] = useState("");
  // 学習時間
  const [studyTime, setStudyTime] = useState();

  // 学習内容の取得
  const onChangeContent = (e) => setStudyContent(e.target.value);
  // 学習時間の取得
  const onChangeTime = (e) => setStudyTime(e.target.value);
  return (
    <>
      <h1>学習記録一覧</h1>
      <div>
        <form>
          <p>
            学習内容
            <input value={studyContent} onChange={onChangeContent}></input>
          </p>
          <p>
            学習内容<input type="number" value={studyTime} onChange={onChangeTime}></input>時間
          </p>
          <p>入力されている学習内容：{studyContent}</p>
          <p>入力されている学習時間：{studyTime}</p>
        </form>
      </div>

      <ul>
        {records.map((record) => (
          <li>
            {record.title} {record.time}時間
          </li>
        ))}
      </ul>
    </>
  );
};
