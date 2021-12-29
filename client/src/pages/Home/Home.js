import React from 'react'
import Navbar from "../../components/NavBar/NavBar";
import "./styles.css"
import {MdBusinessCenter} from "react-icons/md"
import {VscProject} from "react-icons/vsc"
import {FaRegCalendarTimes} from 'react-icons/fa'
import {AiFillStar} from "react-icons/ai"
function Home() {
    return (
      <>
      <div className="home">
          <div className="cardTop">
          <div className='flex justify-center cardItem'>
            <div className="homeTopIcon"> 
            <MdBusinessCenter className="text-fourth text-4xl" />
            </div>
            <div className='text-left'>
            <h5 className=' pl-1 font-semibold'>Project Example</h5>
              <h6 className='pl-1 text-secondary'>Current Project</h6>
            </div>
            
          </div>
          <div className='flex justify-center cardItem'>
            <div className="homeTopIcon"> 
            <VscProject className="text-fourth text-4xl" />
            </div>
            <div className='text-left'>
            <h5 className=' pl-1 font-semibold'>1</h5>
              <h6 className='pl-1 text-secondary'>Allocated Project</h6>
            </div>
            
          </div>

      <div className='flex justify-center cardItem'>
            <div className="homeTopIcon"> 
            <FaRegCalendarTimes className="text-fourth text-4xl" />
            </div>
            <div className='text-left'>
            <h5 className=' pl-1 font-semibold'>1</h5>
              <h6 className='pl-1 text-secondary'>Timesheet Pending</h6>
            </div>
            
          </div>
          </div>

          <div className="cardStarEmployees">

            <h5 className='mt-2 mx-auto font-bold text-center'>Stars of this Quater</h5>
              <div className='p-1  flex sm:mx-auto md:mx-auto'> <AiFillStar className="text-gold" /> <AiFillStar className="text-gold" />  <AiFillStar className="text-gold" />  <AiFillStar  className="text-gold"/>  <AiFillStar  className="text-gold"/> </div>
           
            <div className='flex justify-around my-2 mx-auto starCard'>
                <div className='p-1 mx-4'>
                  <img alt="employee" height="100px" width="150px" src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg" />
                  <div className='text-center mt-2 mb-3'>
                    <h6 className='font-semibold'>
                      Employee 1
                    </h6>
                    <p className='text-sm'> Team | Project</p>
                  </div>
                </div>
                
                <div className='p-1 mx-4'>
                  <img alt="employee" height="100px" width="150px" src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg" />
                  <div className='text-center mt-2 mb-3'>
                    <h6 className='font-semibold'>
                      Employee 2
                    </h6>
                    <p className='text-sm'> Team | Project</p>
                  </div>
                </div>

                <div className='p-1 mx-4'>
                  <img alt="employee" height="100px" width="150px" src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg" />
                  <div className='text-center mt-2 mb-3'>
                    <h6 className='font-semibold'>
                      Employee 3
                    </h6>
                    <p className='text-sm'> Team | Project</p>
                  </div>
                </div>
                
            </div>

          </div>

          <div className='homeCompanyEvents'>
            <div className='homeEvent'>
                <h6 className='mt-4 text text-center font-bold '>Events </h6>
                <img height="150px" style={{width: "100%"}} src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'  alt="eventsWallpaper"/>
                <div className='px-5 py-2'>
                  <h6 className='font-semibold my-2'>Company Anniversary </h6>
                  <p className='text-sm'> Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                     Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the 
                     more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of 
                     the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                     1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                     written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                </div>
            </div>
            <div className='homeEvent'>
            <h6 className='mt-4 text text-center font-bold '>Events </h6>
                <img height="150px" style={{width: "100%"}} src='https://image.shutterstock.com/image-vector/creative-design-coronavirus-vaccine-banner-260nw-1894336930.jpg'  alt="eventsWallpaper"/>
                <div className='px-5 py-2'>
                  <h6 className='font-semibold my-2'>Vaccination Drive </h6>
                  <p className='text-sm'> Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                     Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the 
                     more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of 
                     the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                     1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                     written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                </div>

          </div>


          </div>
        
      </div>
      <Navbar />
      </>
        
    )
}

export default Home






