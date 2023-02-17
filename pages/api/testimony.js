// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name:"Paul Simon",
      dept:"Founder, MegaCorp",
      desc:"Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!",
      img:"./testimonial_face03.png"
  
    },
    {
      name:"Johnny B. Goode",
      dept:"CEO, Getting Things Done",
      desc:"Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.",
      img:"./testimonial_face01.png"
  
    },
    {
      name:"Mary Jane",
      dept:"CEO, Design Matters",
      desc:"We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch.",
      img:"./testimonial_face02.png"
  
    }
  ]
  )
}
