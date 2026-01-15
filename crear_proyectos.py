import os

base_dir = r"C:\Users\Santi\Workana training\servicat-web\proyectos"

proyectos = [
    {"slug": "casa-los-fresnos", "title": "Casa Los Fresnos", "category": "Emprendimientos Privados", "location": "Barrio Santa Teresa, Benavidez", "image": "casa-los-fresnos.jpg", "description": "Construccion minimalista de una planta con posibilidades de expansion. Gran luminosidad y espacialidad con vistas al jardin y la laguna.", "features": ["Construccion minimalista", "Una planta con expansion", "Vistas al jardin", "Vistas a la laguna", "Gran luminosidad"]},
    {"slug": "casa-san-marco", "title": "Casa San Marco", "category": "Emprendimientos Privados", "location": "Barrio San Marco, Benavidez", "image": "casa-san-marco.jpg", "description": "Proyecto de tres cuerpos con estilo minimalista. Combina ladrillo y hormigon, distribuidos en forma de C.", "features": ["Tres cuerpos", "Estilo minimalista", "Ladrillo y hormigon", "Distribucion en C", "Espacio verde"]},
    {"slug": "torre-palermo", "title": "Torre de Oficinas en Palermo", "category": "Emprendimientos Privados", "location": "Palermo, Buenos Aires", "image": "torre-palermo.jpg", "description": "Torre para empresa automotriz con oficinas, salas de reuniones, talleres, museo, salon de exposiciones y restaurant mirador.", "features": ["Oficinas corporativas", "Salas de reuniones", "Talleres", "Museo", "Salon de exposiciones", "Restaurant mirador"]},
    {"slug": "casa-casuarinas", "title": "Casa Las Casuarinas", "category": "Emprendimientos Privados", "location": "Barrio Santa Teresa, Benavidez", "image": "casa-casuarinas.jpg", "description": "Casa minimalista de 180 m2 con 6 ambientes: amplia cocina, living-comedor, espacio para escritorio y tres cuartos en suite.", "features": ["180 m2", "6 ambientes", "Amplia cocina", "Living-comedor", "Escritorio", "3 cuartos en suite"]},
    {"slug": "mezquita", "title": "Sala de Rezo - Mezquita At-Tauhid", "category": "Emprendimientos Privados", "location": "Felipe Vallese 3614, Buenos Aires", "image": "mezquita.jpg", "description": "Remodelacion de sala de rezo con estudio de costumbres de la cultura islamica y arquitectura islamica.", "features": ["Remodelacion integral", "Arquitectura islamica", "Sala de rezo", "Diseno cultural"]},
    {"slug": "walmart", "title": "Proyecto Walmart", "category": "Emprendimientos Privados", "location": "Buenos Aires", "image": "walmart.png", "description": "Expansion integral con renovacion de oficinas, lobby principal, cafeteria, salas de reunion, auditorio y estacionamiento.", "features": ["Oficinas", "Lobby principal", "Cafeteria", "Salas de reunion", "Auditorio", "Estacionamiento"]},
    {"slug": "rio-reconquista", "title": "Entubamiento del Rio Reconquista", "category": "Obras de Agua", "location": "Buenos Aires", "image": "rio-reconquista.jpg", "description": "Desvio de gasoducto de 4 pulgadas y desvio de entubamiento de caneria de agua de 12 pulgadas.", "features": ["Desvio de gasoducto", "Entubamiento de caneria", "Obra hidraulica"]},
    {"slug": "red-cloacal-carrillo", "title": "Red Cloacal Barrio Ramon Carrillo", "category": "Obras de Agua", "location": "Barrio Ramon Carrillo", "image": "red-cloacal-carrillo.jpg", "description": "Realizacion de estudio y proyecto de red cloacal completa para el barrio.", "features": ["Estudio de red cloacal", "Proyecto integral", "Infraestructura sanitaria"]},
    {"slug": "colectora-cloacal-sanisidro", "title": "Colectora Cloacal 160mm", "category": "Obras de Agua", "location": "San Isidro, Buenos Aires", "image": "helper-agua.jpg", "description": "Instalacion de canerias para colectora cloacal de 160 mm. Volumen: 1000 metros.", "features": ["Canerias 160mm", "1000 metros", "Conexiones domiciliarias"]},
    {"slug": "expansion-red-agua", "title": "Expansion de Red de Agua", "category": "Obras de Agua", "location": "Villa Ballester y Villa Zagala", "image": "helper-agua.jpg", "description": "Canerias maestras y distribuidoras de 90 y 315 mm con aproximadamente 480 conexiones. Volumen: 4800 metros.", "features": ["Canerias 90mm y 315mm", "480 conexiones", "4800 metros"]},
    {"slug": "red-agua-lanus", "title": "Expansion Red de Agua Lanus", "category": "Obras de Agua", "location": "Villa Diamante, Lanus", "image": "helper-agua.jpg", "description": "Caneria de 90 mm con conexiones cortas y largas domiciliarias.", "features": ["Caneria 90mm", "Conexiones domiciliarias", "Villa Diamante"]},
    {"slug": "linea-media-tension", "title": "Linea Aerea y Subterranea Media Tension", "category": "Obras de Electricidad", "location": "San Miguel, Buenos Aires", "image": "linea-media-tension.png", "description": "Tendido de linea aerea y subterranea de media tension, colocacion de postes, crucetas y transformadores.", "features": ["Linea aerea", "Linea subterranea", "Media tension", "Postes y crucetas", "Transformadores"]},
    {"slug": "linea-baja-tension", "title": "Tendido Linea Baja Tension", "category": "Obras de Electricidad", "location": "General Pacheco, Buenos Aires", "image": "linea-baja-tension.jpg", "description": "Tendido de linea de baja tension, colocacion de postes, cruce de calles, conexion a clientes y recambio de luminarias.", "features": ["Baja tension", "Colocacion de postes", "Cruce de calles", "Conexion a clientes", "Recambio de luminarias"]},
    {"slug": "medidores", "title": "Recambio y Colocacion de Medidores", "category": "Obras de Electricidad", "location": "Zona Norte, Buenos Aires", "image": "medidores.jpg", "description": "Recambio e instalacion de medidores monofasicos y trifasicos en General Pacheco, Escobar, San Fernando, Olivos y Maschwitz.", "features": ["Medidores monofasicos", "Medidores trifasicos", "Zona Norte"]},
    {"slug": "montaje-integral", "title": "Montaje y Conexionado Integral", "category": "Obras de Electricidad", "location": "Barrio Gral. Rosas, Avellaneda", "image": "helper-agua.jpg", "description": "Montaje de linea con 250 postes, 52 transformadores monofasicos y 1150 conexiones de clientes.", "features": ["250 postes", "52 transformadores", "1150 conexiones"]},
    {"slug": "alumbrado-publico", "title": "Alumbrado Publico", "category": "Obras de Electricidad", "location": "Rafael Castillo, La Matanza", "image": "helper-agua.jpg", "description": "Instalaciones de alumbrado publico, recambio y colocacion de 120 columnas de luminarias.", "features": ["120 columnas", "Alumbrado publico", "Luminarias"]},
    {"slug": "parque-costa", "title": "Plantas Reguladoras Parque de la Costa", "category": "Obras de Gas", "location": "Tigre, Buenos Aires", "image": "parque-costa.jpg", "description": "Plantas reguladoras e instalaciones de gas para los distintos juegos del parque. Comitente: Gas Natural BAN.", "features": ["Plantas reguladoras", "Instalaciones de gas", "Parque de la Costa", "Gas Natural BAN"]},
    {"slug": "gasoducto-panamericana", "title": "Gasoducto Colectora Panamericana", "category": "Obras de Gas", "location": "Vicente Lopez - Escobar", "image": "gasoducto-panamericana.png", "description": "Realizacion de Gasoducto de 4 pulgadas de diametro desde Av. Gral Paz hasta Km 50 en Escobar. Comitente: Gas Natural BAN.", "features": ["Gasoducto 4 pulgadas", "Av. Gral Paz a Escobar", "Gas Natural BAN"]},
    {"slug": "tunelera", "title": "Maquina Tunelera Inteligente", "category": "Obras de Gas", "location": "Buenos Aires", "image": "tunelera.png", "description": "Maquina especializada para instalacion de ductos subterraneos y redes de gas sin excavacion a cielo abierto.", "features": ["Tecnologia tunelera", "Ductos subterraneos", "Sin excavacion"]},
    {"slug": "factor-k", "title": "Factor K Ramal y Planta Reguladora", "category": "Obras de Gas", "location": "San Isidro Labrador, Villa Rosa, Pilar", "image": "factor-k.png", "description": "Instalacion de ramal y planta reguladora de gas. Comitente: Gas Natural BAN.", "features": ["Ramal de gas", "Planta reguladora", "Gas Natural BAN"]},
    {"slug": "gasoducto-laplata", "title": "Gasoducto 3200 mts La Plata", "category": "Obras de Gas", "location": "La Plata, Buenos Aires", "image": "gasoducto-laplata.png", "description": "Ejecucion de 3200 metros de gasoducto. Comitente: Camuzzi Gas.", "features": ["3200 metros", "Gasoducto", "Camuzzi Gas"]},
    {"slug": "el-pueblito", "title": "Reconstruccion 109 Viviendas El Pueblito", "category": "Arquitectura y Restauracion", "location": "Castanares y Portela, CABA", "image": "el-pueblito.jpg", "description": "Reconstruccion integral de 109 unidades habitacionales en el barrio porteno.", "features": ["109 viviendas", "Reconstruccion integral", "CABA"]},
    {"slug": "pista-aerobica", "title": "Pista Aerobica Accesible", "category": "Arquitectura y Restauracion", "location": "Plaza Figueroa Alcorta, CABA", "image": "pista-aerobica.png", "description": "Pista aerobica para personas con capacidades diferentes. Comitente: IVC Instituto de Vivienda de la Ciudad.", "features": ["Accesibilidad", "Pista aerobica", "IVC"]},
    {"slug": "centro-turistico", "title": "Centro de Informacion Turistica", "category": "Arquitectura y Restauracion", "location": "Esmeralda 52, CABA", "image": "centro-turistico.jpg", "description": "Construccion de centro de informacion turistica. Comitente: Ministerio de Espacio Publico.", "features": ["Centro turistico", "Informacion al visitante", "CABA"]},
    {"slug": "otto-krause", "title": "Restauracion Colegio Otto Krause", "category": "Arquitectura y Restauracion", "location": "CABA", "image": "otto-krause.jpg", "description": "Restauracion de chimenea historica, fachadas, azoteas y cielorrasos del emblematico colegio industrial.", "features": ["Restauracion historica", "Chimenea", "Fachadas", "Patrimonio"]},
    {"slug": "conventillo-boca", "title": "Conventillo Barrio de La Boca", "category": "Arquitectura y Restauracion", "location": "Rocha 1031, La Boca, CABA", "image": "conventillo-boca.jpg", "description": "Puesta en valor del conventillo historico. Comitente: Instituto de Vivienda de la Ciudad.", "features": ["Puesta en valor", "Conventillo historico", "La Boca", "IVC"]},
    {"slug": "escuela-suecia", "title": "Escuela Reino de Suecia", "category": "Arquitectura y Restauracion", "location": "Parque Patricios, CABA", "image": "escuela-suecia.jpg", "description": "Puesta en valor de la escuela. Comitente: Direccion General de Espacio y Ambiente Publico.", "features": ["Puesta en valor", "Escuela publica", "Parque Patricios"]}
]

template = """<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Servicat</title>
    <meta name="description" content="{description}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <link rel="stylesheet" href="../assets/css/proyecto.css">
</head>
<body>
    <header class="header scrolled" id="header">
        <nav class="nav container">
            <a href="../index.html" class="nav__logo">
                <span class="logo-text">SERVICAT</span>
                <span class="logo-subtitle">Constructora & Arquitectura</span>
            </a>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item"><a href="../index.html#inicio" class="nav__link">Inicio</a></li>
                    <li class="nav__item"><a href="../index.html#nosotros" class="nav__link">Nosotros</a></li>
                    <li class="nav__item"><a href="../index.html#servicios" class="nav__link">Servicios</a></li>
                    <li class="nav__item"><a href="../index.html#obras" class="nav__link">Obras</a></li>
                    <li class="nav__item"><a href="../index.html#contacto" class="nav__link nav__link--cta">Contacto</a></li>
                </ul>
                <div class="nav__close" id="nav-close"><i class="fas fa-times"></i></div>
            </div>
            <div class="nav__toggle" id="nav-toggle"><i class="fas fa-bars"></i></div>
        </nav>
    </header>

    <section class="proyecto-hero">
        <div class="proyecto-hero__img">
            <img src="../assets/img/proyectos/{image}" alt="{title}">
        </div>
        <div class="proyecto-hero__overlay"></div>
        <div class="proyecto-hero__content container">
            <span class="proyecto-hero__category">{category}</span>
            <h1 class="proyecto-hero__title">{title}</h1>
            <p class="proyecto-hero__location"><i class="fas fa-map-marker-alt"></i> {location}</p>
        </div>
    </section>

    <section class="proyecto-content section">
        <div class="container">
            <div class="proyecto-grid">
                <div class="proyecto-main">
                    <h2>Descripcion del Proyecto</h2>
                    <p>{description}</p>
                    <h3>Caracteristicas</h3>
                    <ul class="proyecto-features">
                        {features_html}
                    </ul>
                </div>
                <div class="proyecto-sidebar">
                    <div class="proyecto-info-card">
                        <h4>Informacion del Proyecto</h4>
                        <ul>
                            <li><strong>Categoria:</strong> {category}</li>
                            <li><strong>Ubicacion:</strong> {location}</li>
                        </ul>
                    </div>
                    <a href="../index.html#contacto" class="btn btn--primary btn--full">Consultar por este proyecto</a>
                </div>
            </div>
        </div>
    </section>

    <section class="proyecto-back">
        <div class="container">
            <a href="../index.html#obras" class="btn btn--outline-dark"><i class="fas fa-arrow-left"></i> Volver a Obras</a>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer__bottom" style="border:none; padding-top:0;">
                <p>&copy; 2026 Servicat. Todos los derechos reservados.</p>
                <p class="footer__credit">Diseño web por <a href="https://sinfin3d.art" target="_blank" rel="noopener">SINFIN</a></p>
            </div>
        </div>
    </footer>

    <script src="../assets/js/main.js"></script>
</body>
</html>"""

for p in proyectos:
    features_html = "\n                        ".join([f'<li><i class="fas fa-check"></i> {f}</li>' for f in p["features"]])
    html = template.format(
        title=p["title"],
        category=p["category"],
        location=p["location"],
        image=p["image"],
        description=p["description"],
        features_html=features_html
    )
    filepath = os.path.join(base_dir, f"{p['slug']}.html")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Creado: {p['slug']}.html")

print(f"\nTotal: {len(proyectos)} paginas creadas")
