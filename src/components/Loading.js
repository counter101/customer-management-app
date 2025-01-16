

function Loading(){
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
          <span role="status">Loading...</span>
        </button>
      </div>
  )
}

export default Loading;