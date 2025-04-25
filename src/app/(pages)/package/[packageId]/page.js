
import Footer from '@/global/components/Footer';
import FuckYou from './_components/FuckYou';



// Product page 
const ProductPageContent = async ( { params }) => {

  return (
    <>
    <FuckYou params={params} />
    <Footer />
    </>
  )
};
export default ProductPageContent;
