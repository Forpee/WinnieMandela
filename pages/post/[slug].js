import Nav from "../../components/plainNav"
import Footer from "../../components/Footer"
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
export const getServerSideProps = async ({ params }) => {
   
    const res = await fetch("https://strapi-943o.onrender.com/articles");
  const data = await res.json();
  
 let post = data.filter((a)=>{if(a.id ==  params.slug){return a}})[0]
 

   
    return {
        props: { post }
       
    }
}


export default function Post({ post }){
  return(

    <div>
    <Nav/>
    <div className="bg-blue-250 flex h-96 mb-4  ">
        <h1 className="m-auto text-7xl text-white w-1/2 text-center">{post.title}</h1>
      </div>
   <div className=''>
   {/* <h1 className='text-center text-5xl text-blue-350 mt-8'>{post.title}</h1> */}
    <h2 className='py-6 md:w-96 text-center mx-auto'>{post.description}</h2>
    <div className='px-96 mx-16'>
    <div className='container p-8 mx-auto shadow-inner rounded'>
    <ReactMarkdown  rehypePlugins={[rehypeRaw]}   >{post.content}</ReactMarkdown>
    </div>
    </div>
   </div>
        <Footer/>
    </div>
  )



}