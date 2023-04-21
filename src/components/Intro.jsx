import './intro.css'
import Computer from '../img/new-com.jpg'


export const Intro = () => {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, My Name is</h2>
            <h1 className='i-name'>Chandra Rizaldy</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content Creator</div>
              </div>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam esse repellat fuga eos eius in tenetur, ipsa porro quis?</p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg">
            <div className="i-img">
            <img src={Computer} alt="gambar-computer" className='i-img' />
          </div></div>
          
        </div>
      </div>
    </div>
  )
}
