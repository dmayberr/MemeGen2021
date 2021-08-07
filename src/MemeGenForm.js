import './bootstrap.min.css'
import './MemeGenForm.css'



const MemeGenForm = () => {
    
    return (
        <div className="row">
            <div className="col">
                <div className="card mb-3">
                    <div className="card-body">
                        <h3>Create Meme</h3>
                        <div className="form-group generator-form">
                            <label className="col-form-label mt-4" for="inputDefault">Image</label>
                            <input type="text" className="form-control" placeholder="Image url" id="imageURLInput" />
                            <label className="col-form-label mt-4" for="inputDefault">Top Text</label>
                            <input type="text" className="form-control" placeholder="Image url" id="topTextInput" />
                            <label className="col-form-label mt-4" for="inputDefault">Bottom Text</label>
                            <input type="text" className="form-control" placeholder="Image url" id="bottomTextInput" />
                        </div>
                        
                    </div>           
                </div>
            </div>
            <div className="col">
            <div className="card mb-3">
                    <div className="card-body">
                        <h3>Preview</h3>
                        <div className="generator-preview">
                            
                           
                        </div>
                    </div>           
                </div>
            </div>
        </div>
    )
}

export default MemeGenForm