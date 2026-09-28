import { useState } from 'react';

const styles = {
container: {
display: 'flex',
minHeight: '100vh',
fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
backgroundColor: '#f8f9fa',
color: '#333',
},
sidebar: {
width: '280px',
backgroundColor: '#0078d4',
color: 'white',
padding: '20px',
display: 'flex',
flexDirection: 'column',
gap: '8px',
boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
},
logoContainer: {
marginBottom: '20px',
paddingBottom: '20px',
borderBottom: '1px solid rgba(255,255,255,0.2)',
},
logoText: {
fontSize: '22px',
fontWeight: 'bold',
margin: 0,
},
subLogoText: {
fontSize: '12px',
opacity: 0.8,
margin: '5px 0 0 0',
},
navButton: {
padding: '12px 15px',
textAlign: 'left',
backgroundColor: 'transparent',
color: 'white',
border: 'none',
cursor: 'pointer',
borderRadius: '6px',
fontSize: '15px',
transition: 'background-color 0.2s',
},
activeNavButton: {
backgroundColor: 'rgba(255, 255, 255, 0.2)',
fontWeight: 'bold',
},
mainContent: {
flex: 1,
padding: '40px',
overflowY: 'auto',
},
card: {
backgroundColor: 'white',
padding: '40px',
borderRadius: '10px',
boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
maxWidth: '900px',
margin: '0 auto',
},
title: {
color: '#0078d4',
borderBottom: '2px solid #f0f0f0',
paddingBottom: '15px',
marginTop: 0,
fontSize: '32px',
},
subtitle: {
color: '#2b2b2b',
marginTop: '30px',
fontSize: '22px',
},
paragraph: {
lineHeight: '1.7',
fontSize: '16px',
color: '#444',
marginBottom: '15px',
},
list: {
lineHeight: '1.7',
fontSize: '16px',
color: '#444',
paddingLeft: '20px',
},
table: {
width: '100%',
borderCollapse: 'collapse',
marginTop: '20px',
},
th: {
backgroundColor: '#f0f0f0',
padding: '12px',
textAlign: 'left',
borderBottom: '2px solid #ddd',
},
td: {
padding: '12px',
borderBottom: '1px solid #ddd',
}
};

const wikiData = {
intro: {
title: "1. Qué es la nube (NIST)",
content: (
<>
Antes de proteger la nube, es fundamental definir qué la distingue de un simple servidor arrendado. Según la norma NIST SP 800-145, la computación en la nube tiene cinco características esenciales:

Autoservicio bajo demanda: El cliente obtiene capacidad sin intervención humana del proveedor.
Acceso amplio por red: Los recursos se alcanzan por la red desde distintos dispositivos.
Agrupación de recursos: La misma infraestructura atiende a muchos clientes a la vez.
Elasticidad rápida: La capacidad crece y se reduce según la demanda.
Servicio medido: El uso se mide, se controla y se cobra.

Consecuencia para la seguridad: El autoservicio permite que un error de configuración quede publicado en segundos, y la agrupación de recursos obliga a aislar a cada cliente de los demás.
</>
)
},
modelos_servicio: {
title: "2. Modelos de Servicio",
content: (
<>
Existen tres modelos de servicio, clasificados según cuánto administra el cliente frente a cuánto administra el proveedor:

    <h3 style={styles.subtitle}>IaaS (Infraestructura como servicio)</h3>
    <p style={styles.paragraph}>El cliente administra el sistema operativo, las aplicaciones y los datos. <em>Ejemplo en Azure: máquinas virtuales, discos y redes virtuales.</em></p>
    
    <h3 style={styles.subtitle}>PaaS (Plataforma como servicio)</h3>
    <p style={styles.paragraph}>El cliente despliega su aplicación sin administrar servidores. <em>Ejemplo en Azure: App Service, Azure SQL Database y Storage.</em></p>
    
    <h3 style={styles.subtitle}>SaaS (Software como servicio)</h3>
    <p style={styles.paragraph}>El cliente usa una aplicación terminada y configura su uso. <em>Ejemplo: Microsoft 365 y Dynamics 365.</em></p>

    <p style={styles.paragraph}><strong>Regla general:</strong> Mientras más administra el proveedor, menos controles quedan en manos del cliente. Pero los controles sobre datos e identidades nunca desaparecen.</p>
  </>
)


},
modelos_despliegue: {
title: "3. Modelos de Despliegue",
content: (
<>
Determinan dónde está la infraestructura y quién la comparte:

Pública: Infraestructura del proveedor, disponible para cualquier cliente.
Privada: De uso exclusivo de una organización, propia o administrada por un tercero.
Comunitaria: Compartida por organizaciones con requisitos comunes.
Híbrida: Dos o más modelos conectados, entre los que se mueven datos y aplicaciones.

En la práctica: Una migración gradual produce, durante un tiempo, un modelo híbrido: parte de los sistemas en la nube y parte en la sala de servidores. Ambas mitades deben protegerse.
</>
)
},
responsabilidad: {
title: "4. Responsabilidad Compartida",
content: (
<>
La responsabilidad cambia con el modelo de servicio (IaaS, PaaS, SaaS). El proveedor protege la infraestructura física (centro de datos, red, hosts), pero hay elementos que NUNCA se transfieren al proveedor, sin importar el modelo:

Datos: Clasificación, protección y decisión de cifrado.
Configuraciones: Cada opción que se activa o que se deja por defecto.
Cuentas: Crear, administrar y retirar el acceso de cada usuario.
Accesos: Roles, MFA (autenticación multifactor) y políticas de acceso.

Advertencia: "Está en Azure" no significa "Azure lo protege". Los errores de configuración (como dejar un contenedor público por error o reglas de red abiertas) son responsabilidad del cliente.
</>
)
},
well_architected: {
title: "5. Pilar de Seguridad",
content: (
<>
Microsoft publica el Azure Well-Architected Framework (marco de buena arquitectura) para evaluar cargas de trabajo. Su pilar de seguridad se basa en el modelo de confianza Zero Trust (Confianza Cero):

Verificar explícitamente: Solo identidades de confianza realizan acciones permitidas.
Usar acceso de mínimo privilegio: La identidad correcta, con los permisos justos, por el tiempo necesario.
Asumir la vulneración: Diseñar controles que limiten el daño si una capa de defensa falla.


    <h3 style={styles.subtitle}>Los 5 Principios de Diseño</h3>
    <ol style={styles.list}>
      <li><strong>Planificar la preparación:</strong> Prácticas, responsables y respuesta a incidentes.</li>
      <li><strong>Proteger la confidencialidad:</strong> Accesos restringidos, datos clasificados, cifrado.</li>
      <li><strong>Proteger la integridad:</strong> Impedir modificaciones no autorizadas.</li>
      <li><strong>Proteger la disponibilidad:</strong> Evitar que un incidente detenga el servicio.</li>
      <li><strong>Sostener la postura:</strong> Mejora continua, inventario, pruebas.</li>
    </ol>
  </>
)


},
caso_practico: {
title: "6. Caso Práctico",
content: (
<>
Ejemplo de migración de un Sistema de Permisos de una Municipalidad a Azure:

Aplicación de permisos y patentes: Se mueve a App Service (PaaS).
Datos de permisos y patentes: Se mueve a Azure SQL Database (PaaS).
Documentos escaneados: Se almacenan en la nube (PaaS).


    <p style={styles.paragraph}><strong>¿Qué deja de preocupar?</strong> Parchar el sistema operativo del servidor y problemas físicos (como inundaciones).</p>
    <p style={styles.paragraph}><strong>¿Qué sigue siendo municipal?</strong> Quién entra, con qué permisos, qué se publica y qué queda registrado.</p>

    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Situación</th>
          <th style={styles.th}>Responde</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.td}>Falla eléctrica en el centro de datos</td>
          <td style={styles.td}>Microsoft</td>
        </tr>
        <tr>
          <td style={styles.td}>Sistema operativo sin parche</td>
          <td style={styles.td}>Microsoft (por ser PaaS)</td>
        </tr>
        <tr>
          <td style={styles.td}>Contraseña débil y sin MFA</td>
          <td style={styles.td}>Municipalidad (Cuentas y accesos)</td>
        </tr>
        <tr>
          <td style={styles.td}>Contenedor con acceso público</td>
          <td style={styles.td}>Municipalidad (Configuración)</td>
        </tr>
      </tbody>
    </table>
  </>
)


}
};

export default function App() {
const [activeTab, setActiveTab] = useState('intro');

 return (
    <div style={styles.container}>

      {/* Barra de navegación lateral */}
      <nav style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logoText}>Wiki GSI</h1>
          <p style={styles.subLogoText}>Seguridad en Cloud Computing</p>
        </div>
        
        {Object.entries(wikiData).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              ...styles.navButton,
              ...(activeTab === key ? styles.activeNavButton : {})
            }}
          >
            {data.title}
          </button>
        ))}
      </nav>

      {/* Contenido principal */}
      <main style={styles.mainContent}>
        <div style={styles.card}>
          <h2 style={styles.title}>{wikiData[activeTab].title}</h2>
          {wikiData[activeTab].content}
        </div>
      </main>

    </div>
  );
}