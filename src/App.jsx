import {Bookmark} from 'lucide-react';
import Card from './components/Card';



export const App = () => {
  const jobOpenings=[
  {
    "brandLogo": "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571050.jpg",
    "name": "Google",
    "datePosted": "5 days ago",
    "post": "Software Engineer",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "pay": 45,
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    "name": "Amazon",
    "datePosted": "2 weeks ago",
    "post": "Backend Developer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "pay": 38,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    "name": "Meta",
    "datePosted": "10 days ago",
    "post": "Frontend Engineer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "pay": 42,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://cdn-icons-png.flaticon.com/512/0/747.png",
    "name": "Apple",
    "datePosted": "1 week ago",
    "post": "iOS Developer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": 50,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://static.vecteezy.com/system/resources/previews/017/396/814/non_2x/netflix-mobile-application-logo-free-png.png",
    "name": "Netflix",
    "datePosted": "3 weeks ago",
    "post": "Platform Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": 60,
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
    "name": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Cloud Engineer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "pay": 40,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://cdn-icons-png.flaticon.com/512/888/888835.png",
    "name": "Adobe",
    "datePosted": "6 days ago",
    "post": "UI Engineer",
    "tag1": "Contract",
    "tag2": "Mid Level",
    "pay": 35,
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/3840px-Salesforce.com_logo.svg.png",
    "name": "Salesforce",
    "datePosted": "2 months ago",
    "post": "CRM Developer",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "pay": 30,
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    "name": "Uber",
    "datePosted": "8 days ago",
    "post": "Data Engineer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "pay": 37,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-0sgMITwNqzwWbNZfDxjhGmmje755YgLHQ&s",
    "name": "Airbnb",
    "datePosted": "12 days ago",
    "post": "Full Stack Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": 48,
    "location": "Delhi, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEu8tfOJpA-vMjPqyI2gEyaDjTaI7tSJFzQ&s",
    "name": "NVIDIA",
    "datePosted": "3 days ago",
    "post": "AI Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": 55,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3039uEgnjhGl5XXEppO5MQlSoJcrtIGs9-g&s",
    "name": "Intel",
    "datePosted": "7 weeks ago",
    "post": "Embedded Systems Engineer",
    "tag1": "Internship",
    "tag2": "Entry Level",
    "pay": 20,
    "location": "Hyderabad, India"
  }
]
  return (
    <>
      <div className="parent">
        {jobOpenings.map(function(el,idx){
          return (
          <div key={idx}>
            <Card key={idx} logo={el.brandLogo} name={el.name} datePosted={el.datePosted} post={el.post} tag1={el.tag1} tag2={el.tag2} pay={el.pay} location={el.location}/>
          </div>
          
        )})}
      </div>
      
      
    </>
  )
}
