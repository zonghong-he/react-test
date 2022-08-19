import Item from './Item';

const List = ({ listData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { content, date, time } = item;
        return <Item key={item} content={content} date={date} time={time}/>;
      })}
    </div>
  );
};
export default List;
