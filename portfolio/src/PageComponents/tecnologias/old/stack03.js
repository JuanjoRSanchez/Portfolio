import React from 'react';
import './stack03.css'
import '../../assets/styles/global.css'
import LogoHTML from '../../assets/images/Logos_tecnologia/logo_html.png'
import Logojs from '../../assets/images/Logos_tecnologia/logo_js.png'
import LogoCSS from '../../assets/images/Logos_tecnologia/logo_css.png'
import LogoNode from '../../assets/images/Logos_tecnologia/logo_node.png'
import LogoReact from '../../assets/images/Logos_tecnologia/logo_react.png'
import LogoVue from '../../assets/images/Logos_tecnologia/logo_vue.png'
import LogoAxios from '../../assets/images/Logos_tecnologia/logo_axios.png'
import LogoJava from '../../assets/images/Logos_tecnologia/logo_java.png'
import LogoSpring from '../../assets/images/Logos_tecnologia/logo_spring.png'
import LogoSql from '../../assets/images/Logos_tecnologia/logo_sql.png'
import LogoJpa from '../../assets/images/Logos_tecnologia/logo_jpa.png'
import Logodocker from '../../assets/images/Logos_tecnologia/logo_docker.png'
import LogoApache from '../../assets/images/Logos_tecnologia/logo_apache.png'

export default function Stack() {
  return (
    <>
      <div id='stack'>
        <section className='section_one box'>
          <div className='box_front'>
            <div className='title'>FrontEnd</div>
            <div className='tecnologia'>
              <img className='logo ' src={Logojs} alt='Logo de JavaScript' />
              <div className='tecnologia_content'>
                <p>JavaScript</p>
                <p>Lenguaje de programación normalmente utilizado en el Front para que sea interpretado por el navegador aunque es
                  posible utilizarlo en el BackEnd y implementar lógica de negocio desde el servidor haciendolo correr en un entorno NODE.js.
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoHTML} alt='Logo de HTML' />
              <div className='tecnologia_content'>
                <p>HTML</p>
                <p>Lenguaje de marcado  cuyo fin es el de dar estructura al contenido de las páginas Web.</p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoCSS} alt='Logo de CSS' />
              <div className='tecnologia_content'>
                <p>CSS</p>
                <p>Lenguaje utilizado para dar estilo a los contenidos de las páginas Web.
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoNode} alt='Logo de NODE.js' />
              <div className='tecnologia_content'>
                <p>Node</p>
                <p>Entorno de desarrollo para JavaScript que permite ejecutar.
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoReact} alt='Logo de React' />
              <div className='tecnologia_content'>
                <p>React</p>
                <p>Librería de JavaScript basada en componentes y principalmente usada para crear páginas SPA (Single Page Aplication).
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoVue} alt='Logo de Vue' />
              <div className='tecnologia_content'>
                <p>Vue</p>
                <p>Framework de JavaScript basada en componentes y principalmente usada para crear páginas SPA (Single Page Aplication).
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoAxios} alt='Logo de Axios' />
              <div className='tecnologia_content'>
                <p>Axios</p>
                <p>API de JavaScript para conexiones asincronas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section_two box'>
          <div className='box_front'>
            <div className='title'>BackEnd</div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoJava} alt='Logo de Java' />
              <div className='tecnologia_content'>
                <p>Java</p>
                <p>Es un lenguaje de programación orientado a objetos, una de
                  sus caracteristicas principales es que es ejecutable en cualquier
                  entorno ya que al compilarse se crea en un lenguaje intermedio
                  que será ejecutado por una maquina virtual de Java que puede
                  ser instalada en cualquier sistema operativo.
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoSpring} alt='Logo de Spring Boot' />
              <div className='tecnologia_content'>
                <p>Spring Boot</p>
                <p>Framework de Java cuya principal caracteristica
                  es: la conficuración de dependencias y el despliegue del servicio
                  de aplicaciones.
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoSql} alt='Logo de SQL' />
              <div className='tecnologia_content'>
                <p>SQL</p>
                <p> Lenguaje  diseñado para el manejo de información de bases
                  de datos.
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoJpa} alt='Logo de JPA' />
              <div className='tecnologia_content'>
                <p>JPA</p>
                <p>Es una API de persistencia de  datos, con el que se manejan
                  las entidades de cara a poder trabajar con ellas en la base de datos .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='section_three box'>
          <div className='box_front'>
            <div className='title'>Despliegue</div>
            <div className='tecnologia'>
              <img className='logo ' src={Logodocker} alt='Logo de JavaScript' />
              <div className='tecnologia_content'>
                <p>Docker</p>
                <p>Tecnología de software dedicada a la virtualización de
                  aplicaciones. Basada en el uso de contenedores que son una
                  forma de virtualización del sistema operativo que a diferencia
                  de una máquina virtual al uso es mas ligero ya que no virtualiza
                  el Kernel sino que utiliza el de la máquina anfitrión.
                </p>
              </div>
            </div>
            <div className='tecnologia'>
              <img className='logo ' src={LogoApache} alt='Logo de CSS' />
              <div className='tecnologia_content'>
                <p>Apache</p>
                <p>Software que ejerce de servidor de codigo abierto basado en Linux.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

/*
<section className='section_zero box'>
    <div className='title'>Cursos y recursos de aprendizaje</div>
    <div>
      <p>Además del Grado Superior de Desarrollo de Aplicaciones Web he segido formandome
        con algunos cursos:
      </p>
      <p>- Curso impartido por Amigoscode en YouTube sobre Spring Boot </p>
      <p>- Curso impartido por OpenWebinars sobre Spring Boot </p>
      <p>- Curso impartido por Amigoscode en YouTube sobre Spring Boot </p>
    </div>
</section>
*/