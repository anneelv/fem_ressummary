import { Hanken_Grotesk } from 'next/font/google'

const hanken = Hanken_Grotesk({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-row md:h-screen md:flex-col md:items-center justify-center md:p-24 ${hanken.className}`}
    >
      <div className='md:inline-flex rounded-bl-2xl rounded-br-2xl md:h-[400px] md:w-[600px] md:rounded-2xl md:shadow-2xl'>

        {/* LEFT SIDE */}
        <div className="flex-row md:h-[400px] md:w-1/2 md:rounded-2xl rounded-bl-2xl rounded-br-2xl bgblue p-6 items-center text-center">
          
          <h1 className='my-1 txtlav text-xl font-bold'>Your Result</h1>
          <div className='flex-row rounded-full justify-center items-center py-9 mx-auto my-5 bgcircle' style={{height:'150px', width:'150px' }}>
            <h1 className='text-white text-6xl font-extrabold'>76</h1>
            <p className='txtlav text-[13px]'>of 100</p>
          </div>
          <h1 className='text-white font-extrabold text-2xl m-2'>Great</h1>
          <p className='txtlav my-2'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-row md:w-1/2 rounded-2xl p-6">

          <h1 className='my-1 text-xl font-bold'>Summary</h1>

          <div className='inline-flex rounded-lg p-2 w-full py-2  box1 h-14 md:h-10 my-3 md:my-2'>
            <div className='w-1/2 inline-flex items-center'>
              <img src="/icon-reaction.svg" alt="reaction" className='mx-2' />
              <h1 className='font-bold text-[16px] md:text-[14px]'>Reaction</h1>
            </div>
            <div className=" w-1/2 inline-flex justify-end items-center">
              <p className='text-black font-bold text-[16px]  mx-2 md:text-[14px]'>80</p>
              <p className='txtpalebl font-bold text-[16px] md:text-[14px]'>/ 100</p>
            </div>
            
          </div>

          <div className='inline-flex rounded-lg p-2 w-full py-2 box2 h-14 md:h-10 my-3 md:my-2'>
            <div className='w-1/2 inline-flex items-center'>
              <img src="/icon-memory.svg" alt="memory" className='mx-2' />
              <h1 className='font-bold text-[16px] md:text-[14px]'>Memory</h1>
            </div>
            <div className=" w-1/2 inline-flex justify-end items-center">
              <p className='text-black font-bold text-[16px]  mx-2 md:text-[14px]'>92</p>
              <p className='txtpalebl font-bold text-[16px] md:text-[14px]'>/ 100</p>
            </div>
            
          </div>

          <div className='inline-flex rounded-lg p-2 w-full py-2 box3 h-14 md:h-10 my-3 md:my-2'>
            <div className='w-1/2 inline-flex items-center'>
              <img src="/icon-verbal.svg" alt="verbal" className='mx-2' />
              <h1 className='font-bold text-[16px] md:text-[14px]'>Verbal</h1>
            </div>
            <div className=" w-1/2 inline-flex justify-end items-center">
              <p className='text-black font-bold text-[16px]  mx-2 md:text-[14px]'>61</p>
              <p className='txtpalebl font-bold text-[16px] md:text-[14px]'>/ 100</p>
            </div>
            
          </div>

          <div className='inline-flex rounded-lg p-2 w-full py-2 box4 h-14 md:h-10 my-3 md:my-2'>
            <div className='w-1/2 inline-flex items-center'>
              <img src="/icon-visual.svg" alt="visual" className='mx-2' />
              <h1 className='font-bold text-[16px] md:text-[14px]'>Visual</h1>
            </div>
            <div className=" w-1/2 inline-flex justify-end items-center">
              <p className='text-black font-bold text-[16px] md:text-[14px]  mx-2'>72</p>
              <p className='txtpalebl font-bold text-[16px] md:text-[14px]'>/ 100</p>
            </div>
            
          </div>

          <button className='btn btn-primary my-9 md:my-6 p-2 rounded-full w-full btn-bg text-white text-[16px] h-12 md:h-10'>
            <span>Continue</span>
          </button>
        </div>

      </div>
    </main>
  )
}
