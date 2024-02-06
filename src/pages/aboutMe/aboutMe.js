

const AboutMeSection=({name,text})=>{
    return(
        <div>
            <h1>Hi, I am {name}</h1>
            <p>My name is John Doe and I'm a software developer.</p>
        </div>
    )

}
const AboutMe = ({person}) => {
  return (
    <div>
    <AboutMeSection name={person.firstName}/>
    </div>
  );
}

export default AboutMe;