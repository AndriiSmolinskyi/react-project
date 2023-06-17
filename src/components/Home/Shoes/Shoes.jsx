import './Shoes.scss';

export const Shoes = ({ imgUrl, price, name }) => {
  return (
   <div className="shoes">
      <div className="shoes__img"><img src={imgUrl} alt="" /></div>
      <div className='shoes__name'>{name}</div>
      <div className="shoes__price">{Number(price)/100}$</div>
   </div>
  );
};

