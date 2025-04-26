import React from "react";
import { motion, useScroll } from "motion/react";
import "./index.css";
import { div } from "motion/react-client";


const App = () => {
  
  //for scrolling
  
  const scrollYProgress = useScroll().scrollYProgress

  return (

    
    <div className="ctn">
      {/* <motion.div
        className="box"
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 2,
          delay: 0,
        }}
      ></motion.div>
      <motion.h1 animate={{ x: 100 }} transition={{ duration: 2, }}> srujan</motion.h1> */}
      {/* <motion.div
        initial={{
          x: -400,  // this set the initial values 
        }}
        animate={{
          x: 1000,
          rotate: 360,
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: 2,
          ease: 'anticipate'
        }}
        className="circle"  >
      </motion.div> */}
      {/* <---------------animation------------------->      */}
      {/* <motion.div
        className="box"
        initial={{
          x: 0,
          y: 0,
        }}
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate:[0,-360 ,0 ,-360 ,0]
        }}
        transition={{
          duration: 5,
          delay: 1,
        }}
      ></motion.div> */}
      {/* <-------------------Hover------------------------> */}
      {/* <motion.div
        whileHover={{
          backgroundColor: 'green',
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="box">

      </motion.div> */}
      {/* <-------------------Drag------------------> */}
      {/* <motion.div
        drag
        dragConstraints={{
          left: 0,
          top: 0,
          right: 1200,
          bottom: 500
        }}
        dragDirectionLock='true'
        whileDrag={{
          scale: 0.8
        }}
        className="box">

      </motion.div> */}
      {/* <------------------scrolling-----------------------> */}
      <div className="p-20 text-center text-white font-mono">
        <motion.div style={{
          scaleX:scrollYProgress,
        }} className="bg-red-500 w-full origin-left h-3 fixed top-0 left-0"></motion.div>
        <h1 className=" text-4xl font-bold mb-6" >NSReddy</h1>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore
          porro enim, vero iusto autem et aliquam cumque sequi ipsa ad
          distinctio facere animi exercitationem, debitis eaque hic blanditiis
          fugit sed! Sit tempora, nemo adipisci aspernatur non magni quo
          nesciunt eos, omnis quia nobis, architecto sapiente. Atque magnam,
          optio accusantium magni culpa aliquid! Dolorum ut suscipit delectus
          culpa id ipsam illumLorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore
          porro enim, vero iusto autem et aliquam cumque sequi ipsa ad
          distinctio facere animi exercitationem, debitis eaque hic blanditiis
          fugit sed! Sit tempora, nemo adipisci aspernatur non magni quo
          nesciunt eos, omnis quia nobis, architecto sapiente. Atque magnam,
          optio accusantium magni culpa aliquid! Dolorum ut suscipit delectus
          culpa id ipsam illum autem nobis a dignissimos voluptatum magni, eos
          vero ipsa natus consequatur soluta iure esse aliquid. Provident, ipsa
          corrupti distinctio aliquam cumque quis dignissimos earum, autem
          voluptatibus inventore esse ex nam tempora dicta numquam excepturi
          iste ab facere! Tenetur exercitationem molestias <br /> sequi quia quo.
          Cumque vitae corporis qui fugiat veniam voluptatum delectus
          voluptatem? Perspiciatis nihil aliquid assumenda aliquam tenetur atque
          harum fuga, suscipit cumque natus
          sed repudiandae dolore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore
          porro enim, vero iusto autem et aliquam cumque sequi ipsa ad
          distinctio facere animi exercitationem, debitis eaque hic blanditiis
          fugit sed! Sit tempora, nemo adipisci aspernatur non magni quo
          nesciunt eos, omnis quia nobis, architecto sapiente. Atque magnam,
          optio accusantium magni culpa aliquid! Dolorum ut suscipit delectus
          culpa id ipsam illum autem nobis a dignissimos voluptatum magni, eos
          vero ipsa natus consequatur soluta iure esse aliquid. Provident, ipsa
          corrupti distinctio aliquam cumque quis  <br /> dignissimos earum, autem
          voluptatibus inventore esse ex nam tempora dicta numquam excepturi
          iste ab facere! Tenetur exercitationem molestias sequi quia quo.
          Cumque vitae corporis qui fugiat veniam voluptatum delectus
          voluptatem? Perspiciatis nihil aliquid assumenda aliquam tenetur atque
          harum fuga, suscipit cumque natus sed repudiandae dolore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore
          porro enim, vero iusto autem et aliquam cumque sequi ipsa ad
          distinctio facere animi exercitationem, debitis eaque hic blanditiis
          fugit sed! Sit tempora, nemo adipisci aspernatur non magni quo
          nesciunt eos, omnis quia nobis, architecto sapiente. Atque magnam,
          optio accusantium magni culpa aliquid! Dolorum ut suscipit delectus
          culpa id ipsam illum autem nobis a dignissimos voluptatum magni, eos
          vero ipsa natus consequatur soluta iure esse aliquid. Provident, ipsa
          corrupti distinctio aliquam cumque quis dignissimos earum, autem
          voluptatibus inventore esse ex nam tempora dicta numquam excepturi
          iste ab facere! Tenetur exercitationem molestias sequi quia quo.
          Cumque vitae corporis qui fugiat veniam voluptatum delectus
          voluptatem? Perspiciatis nihil aliquid assumenda aliquam tenetur atque
          harum fuga, suscipit cumque natus sed repudiandae dolore.tes
          cupiditate ipsam provident voluptate, voluptas incidunt accusantium.
          Ullam facilis accusamus ipsum sint ducimus inventore similique,
          nostrum consectetur odit unde, numquam et enim nulla explicabo
          molestiae doloremque eveniet quisquam ad rem. Ipsa quisquam ab magni
          nesciunt sed sint, cum optio eius facilis nemo numquam odit sequi
          quasi sapiente quas aliquam hic molestias possimus?
        </p>

      </div>
    </div>
  );
};

export default App;
