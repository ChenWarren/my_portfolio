
const ListsUi = ({
    title='Title',
    lists=['List 1', 'List 2', 'List 3'],
}) => {
  return (
    <div className="list-containter">
        <div className="list-title">{title}</div>
        <div className="list-item-wrapper">
            {lists.map((l: string)=> (
                    <div key={l} className="list-item">
                        {l}
                    </div>
            ))}
        </div>
    </div>
  )
}

export default ListsUi