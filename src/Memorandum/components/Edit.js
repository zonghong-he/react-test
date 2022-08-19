import { useState, useEffect } from 'react';

const Edit = ({ add }) => {
  const [content, setContent] = useState('');
  const [date, setDate] = useState(0);
  const [time, setTime] = useState(0);
  function addItem(content, date, time) {
    add(function (prevData) {
      return [{ content, date, time }];
    });
  }
  return (
    <div className="edit">
      <h1>備忘錄</h1>
      <p>記事:</p>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <p>日期:</p>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <p>時間:</p>
      <input
        type="time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <button
        className="add"
        onClick={() => {
          addItem(content, date, time);
        }}
      >
        新增
      </button>
    </div>
  );
};

export default Edit;
