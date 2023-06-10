/**
 * <List />
 *
 * This component is used to list/map through an array of data.
 *
 * @returns
 */

interface ListProps {
  data?: any,
  component?: any,
  className?: any
}

function List({ data, component: Component, className }:ListProps) {
  return (
    <>
      {data.map((obj:any, index:any) => {
        
        return <Component key={obj.id} data={obj} className={className}  />
        
      })}
    </>
  );
}

export default List;
