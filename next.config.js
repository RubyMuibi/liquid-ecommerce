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
} 