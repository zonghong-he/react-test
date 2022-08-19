const Item = ({ content, date, time }) => {
  // const { content, date, time } = props;
 
  return (
    <div className="item">
      <p>{content}</p>
      <p>
        {date}
        {time}
      </p>
      <button className="remove">刪除</button>
    </div>
  );
};

export default Item;
