export const grpahCMSImageLoader = ({ src }) => src;



// ---------------------- ADD, REMOVE & UPDATE IMAGES URLs for: ---------------------- //

// 1. HOME PAGE - SLIDER 
const homeSliderImages = [ 
  { url: '/gallery/graduate.jpg' },
  { url: '/gallery/classroom.jpg' },
  { url: '/gallery/students.jpg' },
  { url: '/gallery/tree.jpg' },
  { url: '/gallery/lake.jpg' },
  { url: '/gallery/grass.jpg' },
  ]





// 2. ABOUT PAGE - SLIDER
const aboutSliderImages = [ 
  { url: '/home_slider/1.jpg' },
  { url: '/home_slider/2.jpg' },
  { url: '/home_slider/3.jpg' },
  { url: '/home_slider/4.jpg' },
  { url: '/home_slider/5.jpg' },
  { url: '/home_slider/6.jpg' },
  ]
 



  
// 3. CSxGALLERY PAGE IMAGE URLs
const galleryImages = [
    { url: '/gallery/graduate.jpg' },
    { url: '/gallery/classroom.jpg' },
    { url: '/gallery/students.jpg' },
    { url: '/gallery/tree.jpg' },
    { url: '/gallery/lake.jpg' },
    { url: '/gallery/grass.jpg' },
    { url: '/home_slider/1.jpg' },
    { url: '/home_slider/2.jpg' },
    { url: '/home_slider/3.jpg' },
    { url: '/home_slider/4.jpg' },
    { url: '/home_slider/5.jpg' },
    { url: '/home_slider/6.jpg' },
]




// 4. Developers Info {}

const anuj = {
      image: '/developers/anuj.jpg',
      name: 'Anuj Das',
      role: 'Full Stack Developer',
      email: 'anujdas10.personal@outlook.com',

      socials: {
        facebook: '',
        instagram: '',
        twitter: '',
        github: '',
        linkedin: '',
        portfolio: ''
      }
}

const debojyoti = {
  image: '/developers/anuj.jpg',
  name: 'Debojyoti Chakraborty',
  role: 'UI/UX Designer & Backend Developer',
  email: 'anujdas10.personal@outlook.com',

  socials: {
    facebook: '',
    instagram: '',
    twitter: '',
    github: '',
    linkedin: '',
    portfolio: ''
  }
}

const kaustav = {
  image: '/developers/anuj.jpg',
  name: 'Kaustav Purkayastha',
  role: 'Frontend Developer',
  email: 'anujdas10.personal@outlook.com',

  socials: {
    facebook: '',
    instagram: '',
    twitter: '',
    github: '',
    linkedin: '',
    portfolio: ''
  }
}













// ******** Mandatory Exports ******** //
export {
    galleryImages, 
    aboutSliderImages, 
    homeSliderImages,
  anuj,
  kaustav,
  debojyoti
}; 