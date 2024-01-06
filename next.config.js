/** @type {import('next').NextConfig} */
const nextConfig = {} 
  
module.exports = { 
    redirects: async () => { 
        return [ 
            { 
                source: '/product',           
                destination: '/',    
                permanent: true, 
            }, 
        ] 
  
    }, 

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
        ],
      },
} 