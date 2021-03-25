import './ImageLinkForm.css'


export const ImageLinkForm= ({changeInput,submit})=>{
    return(
       <div>
           <p className='f3'>
               {`This magic brain will detect faces in your pictures give it a try`}
           </p>
           <div className='center'>
               <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 br2 w-70 center ' type='text' onChange={changeInput} /> 
                    <button 
                    className='w-30 grow f4 link ph3 br2 pv2 dib white bg-light-purple'
                    onClick={submit}
                    >
                        Detect
                    </button>   
               </div>
          </div>
       </div> 
    )
}

export default ImageLinkForm;
