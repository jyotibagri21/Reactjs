import { Bookmark } from "lucide-react";
const Card = (ele) => {
  return (
    <>
        <div className="card">
          <div>
            <div className="top">
              <img src={ele.logo} alt="not found" />
              <button>Save <Bookmark size={12}/></button>
            </div>
            <div className="center">
              <h3>{ele.name }<span> {ele.datePosted}</span></h3>
              <h2>{ele.post}</h2>
              <div className='tag'>
                <h4>{ele.tag1}</h4>
                <h4>{ele.tag2}</h4>
              </div>
            </div>
          </div>
          
          <div className="bottom">
            <div>
                <h3>$ {ele.pay}</h3>
                <p>{ele.location}</p>
            </div>
            <button>Apply now </button>
          </div>
        
        </div>
    </>
  )
}

export default Card