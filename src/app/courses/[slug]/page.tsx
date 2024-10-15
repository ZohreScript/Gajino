export default async function CourseDetails({
    params,
}:{
    params:{slug:string};

}) {
const {slug}=params;
return(
    <h1>{slug}</h1>
)    
}