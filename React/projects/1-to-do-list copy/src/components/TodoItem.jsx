function TodoItem({todoName,todoDate}) {
    return <>
        <div className="container text-center">
            <div className="row item-row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default TodoItem;