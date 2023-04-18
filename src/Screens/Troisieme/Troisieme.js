import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, Sparkles, Float } from '@react-three/drei'
import './styles.css'
import Plane from '../../components/Plane'

const Troisieme = () => {
  return (
    <Canvas style={{ backgroundColor: 'black' }}>
      <ambientLight intensity={0.2} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        intensity={2}
        shadow-bias={-0.0001}
      />

      <ScrollControls pages={4} damping={0.1}>
        <Sparkles size={2} scale={[10, 10, 10]}></Sparkles>
        <Float
          speed={4}
          rotationIntensity={0.5}
          floatIntensity={1}
          floatingRange={[1, 1]}>
          <Plane />
        </Float>

        <Scroll html style={{ width: '100%' }}>
          <div className="row logo-container">
            <img src="/img/sabre_logo.png" />
          </div>
          <div className="row" style={{ position: 'absolute', top: `152vh` }}>
            <h2 style={{ maxWidth: '400px' }}>
              Together, we make travel happen
            </h2>
            <p style={{ maxWidth: '400px' }}>
              Our team members have the unique opportunity to shape scalable
              solutions that have a global impact – powering mobile apps,
              websites, reservation and scheduling systems, terminals, and many
              other cutting-edge solutions. Millions of consumers and employees
              interact every day with our technology. We work hard at innovating
              the next wave of technology in our sector, whether it be voice
              recognition, data analytics, artificial intelligence, or machine
              learning.
            </p>
            <button>Read more</button>
          </div>

          <div className="row" style={{ position: 'absolute', top: `230vh` }}>
            <div
              className="col"
              style={{ position: 'absolute', left: `100vh`, width: '540px' }}>
              <h2 style={{ maxWidth: '390px' }}>Sabre in Poland</h2>
              <p style={{ maxWidth: '390px' }}>
                Sabre Poland’s Global Capability Center was established 21 years
                ago. Since then, we have grown from 6 developers to around 1300
                employees and become one of the most recognizable IT companies
                in the local market. Sabre Poland is not only a provider of the
                most up-to-date technology solutions but also a place where
                everyone can gain industry knowledge and spread their wings.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <a
            href="https://www.sabre.com/locations/poland/careers-start-here/"
            target="_blank">
            <h2 className="internship-link">Join our Internship Program!</h2>
          </a>
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}

export default Troisieme
