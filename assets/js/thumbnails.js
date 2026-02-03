/* Thumbnails generados en Canvas para proyectos sin foto */
(function() {
    function drawColectoraCloacal(canvas) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width = canvas.offsetWidth || 800;
        var h = canvas.height = canvas.offsetHeight || 500;

        // Cielo
        var sky = ctx.createLinearGradient(0, 0, 0, h * 0.35);
        sky.addColorStop(0, '#87CEEB');
        sky.addColorStop(1, '#b8e4f7');
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, w, h * 0.35);

        // Superficie/pasto
        ctx.fillStyle = '#6b8e5a';
        ctx.fillRect(0, h * 0.33, w, h * 0.07);

        // Tierra
        var soil = ctx.createLinearGradient(0, h * 0.4, 0, h);
        soil.addColorStop(0, '#8B6914');
        soil.addColorStop(0.3, '#7a5c12');
        soil.addColorStop(1, '#5a4210');
        ctx.fillStyle = soil;
        ctx.fillRect(0, h * 0.4, w, h * 0.6);

        // Capas de tierra
        ctx.strokeStyle = 'rgba(0,0,0,0.08)';
        ctx.lineWidth = 1;
        for (var i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.moveTo(0, h * 0.45 + i * h * 0.06);
            for (var x = 0; x < w; x += 20) {
                ctx.lineTo(x, h * 0.45 + i * h * 0.06 + Math.sin(x * 0.02 + i) * 3);
            }
            ctx.stroke();
        }

        // Piedras en la tierra
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        for (var i = 0; i < 30; i++) {
            var px = Math.random() * w;
            var py = h * 0.45 + Math.random() * h * 0.5;
            ctx.beginPath();
            ctx.ellipse(px, py, 3 + Math.random() * 5, 2 + Math.random() * 3, Math.random() * Math.PI, 0, Math.PI * 2);
            ctx.fill();
        }

        // Tuberia principal
        var pipeY = h * 0.6;
        var pipeH = h * 0.08;

        // Sombra del tubo
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(0, pipeY + 2, w, pipeH);

        // Tubo exterior
        var pipeGrad = ctx.createLinearGradient(0, pipeY, 0, pipeY + pipeH);
        pipeGrad.addColorStop(0, '#607d8b');
        pipeGrad.addColorStop(0.3, '#90a4ae');
        pipeGrad.addColorStop(0.5, '#b0bec5');
        pipeGrad.addColorStop(0.7, '#90a4ae');
        pipeGrad.addColorStop(1, '#546e7a');
        ctx.fillStyle = pipeGrad;
        ctx.fillRect(0, pipeY, w, pipeH);

        // Juntas del tubo
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        for (var x = w * 0.2; x < w; x += w * 0.25) {
            ctx.fillRect(x - 2, pipeY - 2, 4, pipeH + 4);
        }

        // Brillo del tubo
        ctx.fillStyle = 'rgba(255,255,255,0.15)';
        ctx.fillRect(0, pipeY + 2, w, pipeH * 0.25);

        // Conexiones domiciliarias (tubos verticales)
        var connections = [w * 0.2, w * 0.45, w * 0.7, w * 0.9];
        connections.forEach(function(cx) {
            var connGrad = ctx.createLinearGradient(cx - 6, 0, cx + 6, 0);
            connGrad.addColorStop(0, '#546e7a');
            connGrad.addColorStop(0.5, '#90a4ae');
            connGrad.addColorStop(1, '#546e7a');
            ctx.fillStyle = connGrad;
            ctx.fillRect(cx - 6, h * 0.33, 12, pipeY - h * 0.33);

            // Codo
            ctx.beginPath();
            ctx.arc(cx, pipeY, 10, 0, Math.PI * 2);
            ctx.fillStyle = '#78909c';
            ctx.fill();
        });

        // Casas en superficie
        var houses = [w * 0.15, w * 0.4, w * 0.65, w * 0.85];
        houses.forEach(function(hx, i) {
            // Casa
            ctx.fillStyle = '#e8d5b7';
            ctx.fillRect(hx - 15, h * 0.2, 30, h * 0.13);
            // Techo
            ctx.fillStyle = '#c9a26d';
            ctx.beginPath();
            ctx.moveTo(hx - 20, h * 0.2);
            ctx.lineTo(hx, h * 0.12);
            ctx.lineTo(hx + 20, h * 0.2);
            ctx.fill();
            // Ventana
            ctx.fillStyle = '#87CEEB';
            ctx.fillRect(hx - 5, h * 0.23, 10, 8);
        });

        // Texto "160mm"
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = 'bold ' + (h * 0.04) + 'px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('160mm', w * 0.5, pipeY + pipeH * 0.65);

        // Flechas de flujo
        ctx.strokeStyle = 'rgba(100,181,246,0.6)';
        ctx.lineWidth = 2;
        for (var x = w * 0.1; x < w * 0.9; x += w * 0.15) {
            ctx.beginPath();
            ctx.moveTo(x, pipeY + pipeH * 0.5);
            ctx.lineTo(x + 15, pipeY + pipeH * 0.5);
            ctx.moveTo(x + 10, pipeY + pipeH * 0.35);
            ctx.lineTo(x + 15, pipeY + pipeH * 0.5);
            ctx.lineTo(x + 10, pipeY + pipeH * 0.65);
            ctx.stroke();
        }
    }

    function drawExpansionRedAgua(canvas) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width = canvas.offsetWidth || 800;
        var h = canvas.height = canvas.offsetHeight || 500;

        // Fondo azul oscuro (mapa estilizado)
        var bg = ctx.createLinearGradient(0, 0, w, h);
        bg.addColorStop(0, '#1a3a5c');
        bg.addColorStop(1, '#0d2137');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Grid de fondo
        ctx.strokeStyle = 'rgba(100,181,246,0.08)';
        ctx.lineWidth = 1;
        for (var x = 0; x < w; x += 30) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (var y = 0; y < h; y += 30) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }

        // Centro de distribucion
        var cx = w * 0.5, cy = h * 0.5;

        // Red de canerias principales (lineas gruesas)
        ctx.strokeStyle = 'rgba(100,181,246,0.4)';
        ctx.lineWidth = 6;
        var mainLines = [
            [cx, cy, cx - w * 0.35, cy - h * 0.15],
            [cx, cy, cx + w * 0.35, cy - h * 0.1],
            [cx, cy, cx - w * 0.25, cy + h * 0.3],
            [cx, cy, cx + w * 0.3, cy + h * 0.25],
            [cx, cy, cx, cy - h * 0.35],
            [cx, cy, cx - w * 0.1, cy + h * 0.4]
        ];

        mainLines.forEach(function(line) {
            ctx.beginPath();
            ctx.moveTo(line[0], line[1]);
            ctx.lineTo(line[2], line[3]);
            ctx.stroke();
        });

        // Red secundaria (ramificaciones)
        ctx.strokeStyle = 'rgba(100,181,246,0.25)';
        ctx.lineWidth = 3;
        mainLines.forEach(function(line) {
            var mx = (line[0] + line[2]) * 0.5;
            var my = (line[1] + line[3]) * 0.5;
            for (var i = 0; i < 3; i++) {
                var angle = Math.random() * Math.PI * 2;
                var len = 30 + Math.random() * 60;
                ctx.beginPath();
                ctx.moveTo(mx + i * 20, my + i * 10);
                ctx.lineTo(mx + i * 20 + Math.cos(angle) * len, my + i * 10 + Math.sin(angle) * len);
                ctx.stroke();
            }
        });

        // Nodos de conexion
        ctx.fillStyle = 'rgba(100,181,246,0.6)';
        mainLines.forEach(function(line) {
            // Nodo final
            ctx.beginPath();
            ctx.arc(line[2], line[3], 6, 0, Math.PI * 2);
            ctx.fill();

            // Nodo intermedio
            var mx = (line[0] + line[2]) * 0.5;
            var my = (line[1] + line[3]) * 0.5;
            ctx.beginPath();
            ctx.arc(mx, my, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        // Puntos de conexion domiciliaria (muchos puntos pequenos)
        ctx.fillStyle = 'rgba(255,193,7,0.5)';
        for (var i = 0; i < 80; i++) {
            var px = w * 0.1 + Math.random() * w * 0.8;
            var py = h * 0.1 + Math.random() * h * 0.8;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Centro principal (planta de agua)
        ctx.beginPath();
        ctx.arc(cx, cy, 18, 0, Math.PI * 2);
        var centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 18);
        centerGrad.addColorStop(0, '#64b5f6');
        centerGrad.addColorStop(1, '#1565c0');
        ctx.fillStyle = centerGrad;
        ctx.fill();
        ctx.strokeStyle = '#90caf9';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Icono de gota en el centro
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(cx, cy - 8);
        ctx.bezierCurveTo(cx - 6, cy, cx - 6, cy + 5, cx, cy + 8);
        ctx.bezierCurveTo(cx + 6, cy + 5, cx + 6, cy, cx, cy - 8);
        ctx.fill();

        // Pulsos animados (circulos concentricos)
        for (var r = 1; r <= 3; r++) {
            ctx.beginPath();
            ctx.arc(cx, cy, 18 + r * 25, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(100,181,246,' + (0.2 - r * 0.05) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Texto de datos
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = (h * 0.03) + 'px Montserrat, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('4800 mts', w * 0.05, h * 0.08);
        ctx.fillText('480 conexiones', w * 0.05, h * 0.13);

        // Leyenda
        ctx.fillStyle = 'rgba(100,181,246,0.4)';
        ctx.fillRect(w * 0.05, h * 0.88, 20, 3);
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = (h * 0.025) + 'px Montserrat, sans-serif';
        ctx.fillText('Red principal', w * 0.05 + 25, h * 0.89);

        ctx.fillStyle = 'rgba(255,193,7,0.5)';
        ctx.beginPath();
        ctx.arc(w * 0.05 + 5, h * 0.93, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillText('Conexiones', w * 0.05 + 25, h * 0.935);
    }

    function drawRedAguaLanus(canvas) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width = canvas.offsetWidth || 800;
        var h = canvas.height = canvas.offsetHeight || 500;

        // Fondo gradiente azul
        var bg = ctx.createLinearGradient(0, 0, 0, h);
        bg.addColorStop(0, '#0d47a1');
        bg.addColorStop(1, '#1565c0');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Patron de ondas de fondo
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.lineWidth = 2;
        for (var y = 0; y < h; y += 25) {
            ctx.beginPath();
            for (var x = 0; x < w; x += 5) {
                ctx.lineTo(x, y + Math.sin(x * 0.03 + y * 0.1) * 10);
            }
            ctx.stroke();
        }

        // Tuberia horizontal principal
        var pipeY = h * 0.45;
        var pipeGrad = ctx.createLinearGradient(0, pipeY - 12, 0, pipeY + 12);
        pipeGrad.addColorStop(0, '#42a5f5');
        pipeGrad.addColorStop(0.3, '#90caf9');
        pipeGrad.addColorStop(0.5, '#bbdefb');
        pipeGrad.addColorStop(0.7, '#90caf9');
        pipeGrad.addColorStop(1, '#42a5f5');
        ctx.fillStyle = pipeGrad;

        // Tubo horizontal con curvas
        ctx.beginPath();
        ctx.moveTo(0, pipeY - 12);
        ctx.lineTo(w * 0.3, pipeY - 12);
        ctx.quadraticCurveTo(w * 0.35, pipeY - 12, w * 0.35, pipeY - 30);
        ctx.lineTo(w * 0.35, pipeY - 60);
        ctx.lineTo(w * 0.35 + 24, pipeY - 60);
        ctx.lineTo(w * 0.35 + 24, pipeY - 30);
        ctx.quadraticCurveTo(w * 0.35 + 24, pipeY + 12, w * 0.4, pipeY + 12);
        ctx.lineTo(w, pipeY + 12);
        ctx.lineTo(w, pipeY - 12);
        ctx.lineTo(w * 0.4, pipeY - 12);
        ctx.fill();

        // Continuar tubo izquierdo
        ctx.fillStyle = pipeGrad;
        ctx.fillRect(0, pipeY - 12, w * 0.3, 24);

        // Tubo recto derecho
        ctx.fillRect(w * 0.4, pipeY - 12, w * 0.6, 24);

        // Conexiones domiciliarias (tubos verticales hacia abajo)
        var domConns = [w * 0.15, w * 0.5, w * 0.65, w * 0.8];
        domConns.forEach(function(dx) {
            var connGrad = ctx.createLinearGradient(dx - 5, 0, dx + 5, 0);
            connGrad.addColorStop(0, '#42a5f5');
            connGrad.addColorStop(0.5, '#90caf9');
            connGrad.addColorStop(1, '#42a5f5');
            ctx.fillStyle = connGrad;
            ctx.fillRect(dx - 5, pipeY + 12, 10, h * 0.3);

            // Llave/valvula
            ctx.fillStyle = '#ffc107';
            ctx.beginPath();
            ctx.arc(dx, pipeY + 12 + h * 0.1, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ff8f00';
            ctx.fillRect(dx - 2, pipeY + 12 + h * 0.1 - 12, 4, 8);

            // Casa
            var houseY = pipeY + 12 + h * 0.3;
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.fillRect(dx - 18, houseY, 36, 25);
            ctx.beginPath();
            ctx.moveTo(dx - 22, houseY);
            ctx.lineTo(dx, houseY - 15);
            ctx.lineTo(dx + 22, houseY);
            ctx.fill();
        });

        // Gotas de agua decorativas
        function drawDrop(x, y, size) {
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            ctx.beginPath();
            ctx.moveTo(x, y - size);
            ctx.bezierCurveTo(x - size * 0.7, y, x - size * 0.7, y + size * 0.5, x, y + size);
            ctx.bezierCurveTo(x + size * 0.7, y + size * 0.5, x + size * 0.7, y, x, y - size);
            ctx.fill();
        }

        var drops = [
            [w * 0.08, h * 0.15, 15], [w * 0.25, h * 0.08, 10],
            [w * 0.6, h * 0.12, 12], [w * 0.85, h * 0.18, 8],
            [w * 0.92, h * 0.08, 14], [w * 0.45, h * 0.15, 9],
            [w * 0.75, h * 0.06, 11]
        ];
        drops.forEach(function(d) { drawDrop(d[0], d[1], d[2]); });

        // Texto "90mm"
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.font = 'bold ' + (h * 0.05) + 'px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('90mm', w * 0.15, pipeY + 5);

        // Flechas de flujo en tubo
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 2;
        var arrows = [w * 0.55, w * 0.7, w * 0.85];
        arrows.forEach(function(ax) {
            ctx.beginPath();
            ctx.moveTo(ax, pipeY);
            ctx.lineTo(ax + 12, pipeY);
            ctx.moveTo(ax + 8, pipeY - 5);
            ctx.lineTo(ax + 12, pipeY);
            ctx.lineTo(ax + 8, pipeY + 5);
            ctx.stroke();
        });
    }

    function drawMontajeIntegral(canvas) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width = canvas.offsetWidth || 800;
        var h = canvas.height = canvas.offsetHeight || 500;

        // Fondo atardecer/industrial
        var bg = ctx.createLinearGradient(0, 0, 0, h);
        bg.addColorStop(0, '#1a1a2e');
        bg.addColorStop(0.4, '#16213e');
        bg.addColorStop(0.7, '#0f3460');
        bg.addColorStop(1, '#1a1a2e');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Linea de horizonte
        ctx.fillStyle = '#0a0a15';
        ctx.fillRect(0, h * 0.7, w, h * 0.3);

        // Postes electricos
        var postes = [w * 0.08, w * 0.22, w * 0.38, w * 0.54, w * 0.7, w * 0.86];
        postes.forEach(function(px, i) {
            // Poste
            ctx.fillStyle = '#5c4033';
            ctx.fillRect(px - 3, h * 0.15, 6, h * 0.55);

            // Cruceta
            ctx.fillStyle = '#6d4c3d';
            ctx.fillRect(px - 22, h * 0.18, 44, 4);
            ctx.fillRect(px - 18, h * 0.25, 36, 3);

            // Aisladores
            ctx.fillStyle = '#90caf9';
            [-20, -10, 0, 10, 20].forEach(function(ox) {
                ctx.beginPath();
                ctx.arc(px + ox, h * 0.17, 3, 0, Math.PI * 2);
                ctx.fill();
            });

            // Transformador en algunos postes
            if (i % 2 === 1) {
                ctx.fillStyle = '#607d8b';
                ctx.fillRect(px - 10, h * 0.32, 20, 16);
                ctx.fillStyle = '#78909c';
                ctx.fillRect(px - 8, h * 0.32, 16, 3);
                // Cables bajada
                ctx.strokeStyle = 'rgba(255,193,7,0.5)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(px - 5, h * 0.32 + 16);
                ctx.lineTo(px - 5, h * 0.55);
                ctx.moveTo(px + 5, h * 0.32 + 16);
                ctx.lineTo(px + 5, h * 0.55);
                ctx.stroke();
            }
        });

        // Cables entre postes
        for (var row = 0; row < 2; row++) {
            var cableY = h * 0.18 + row * 0.07 * h;
            ctx.strokeStyle = row === 0 ? 'rgba(255,193,7,0.6)' : 'rgba(255,152,0,0.4)';
            ctx.lineWidth = row === 0 ? 2 : 1.5;
            for (var i = 0; i < postes.length - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(postes[i], cableY);
                var midX = (postes[i] + postes[i + 1]) / 2;
                var sag = 15 + row * 5;
                ctx.quadraticCurveTo(midX, cableY + sag, postes[i + 1], cableY);
                ctx.stroke();
            }
        }

        // Conexiones domiciliarias (lineas bajando de los cables)
        ctx.strokeStyle = 'rgba(144,202,249,0.3)';
        ctx.lineWidth = 1;
        for (var i = 0; i < 20; i++) {
            var lx = w * 0.05 + Math.random() * w * 0.9;
            ctx.beginPath();
            ctx.moveTo(lx, h * 0.25);
            ctx.lineTo(lx + (Math.random() - 0.5) * 20, h * 0.68);
            ctx.stroke();
        }

        // Casas en la base
        for (var i = 0; i < 12; i++) {
            var hx = w * 0.04 + i * w * 0.08;
            var hy = h * 0.68;
            ctx.fillStyle = 'rgba(255,255,255,0.08)';
            ctx.fillRect(hx, hy, w * 0.06, h * 0.08);
            ctx.beginPath();
            ctx.moveTo(hx - 3, hy);
            ctx.lineTo(hx + w * 0.03, hy - h * 0.04);
            ctx.lineTo(hx + w * 0.06 + 3, hy);
            ctx.fill();
            // Ventana iluminada
            ctx.fillStyle = 'rgba(255,193,7,0.3)';
            ctx.fillRect(hx + w * 0.015, hy + h * 0.02, 8, 6);
        }

        // Datos superpuestos
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = 'bold ' + (h * 0.035) + 'px Montserrat, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('250 postes', w * 0.04, h * 0.9);
        ctx.fillText('52 transformadores', w * 0.04, h * 0.95);

        ctx.textAlign = 'right';
        ctx.fillText('1150 conexiones', w * 0.96, h * 0.9);

        // Chispas electricas decorativas
        ctx.strokeStyle = 'rgba(255,235,59,0.5)';
        ctx.lineWidth = 2;
        var sparks = [[w * 0.22, h * 0.16], [w * 0.54, h * 0.16], [w * 0.86, h * 0.16]];
        sparks.forEach(function(s) {
            ctx.beginPath();
            ctx.moveTo(s[0] - 6, s[1] - 4);
            ctx.lineTo(s[0], s[1]);
            ctx.lineTo(s[0] - 3, s[1]);
            ctx.lineTo(s[0] + 4, s[1] + 5);
            ctx.stroke();
        });
    }

    function drawAlumbradoPublico(canvas) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width = canvas.offsetWidth || 800;
        var h = canvas.height = canvas.offsetHeight || 500;

        // Fondo noche
        var bg = ctx.createLinearGradient(0, 0, 0, h);
        bg.addColorStop(0, '#0a0e27');
        bg.addColorStop(0.5, '#141832');
        bg.addColorStop(1, '#1a1f3a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        // Estrellas
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        for (var i = 0; i < 40; i++) {
            var sx = Math.random() * w;
            var sy = Math.random() * h * 0.4;
            var sr = 0.5 + Math.random() * 1.5;
            ctx.beginPath();
            ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.fill();
        }

        // Calle / pavimento
        ctx.fillStyle = '#2a2a3a';
        ctx.fillRect(0, h * 0.72, w, h * 0.28);

        // Linea de vereda
        ctx.fillStyle = '#3a3a4a';
        ctx.fillRect(0, h * 0.7, w, h * 0.04);

        // Lineas de la calle
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        for (var x = w * 0.1; x < w; x += w * 0.12) {
            ctx.fillRect(x, h * 0.85, w * 0.06, 3);
        }

        // Columnas de luminarias
        var columnas = [];
        var numColumnas = 7;
        for (var i = 0; i < numColumnas; i++) {
            columnas.push(w * 0.06 + i * (w * 0.88 / (numColumnas - 1)));
        }

        columnas.forEach(function(cx, i) {
            // Halo de luz
            var haloGrad = ctx.createRadialGradient(cx, h * 0.38, 0, cx, h * 0.38, h * 0.35);
            haloGrad.addColorStop(0, 'rgba(255,220,100,0.15)');
            haloGrad.addColorStop(0.3, 'rgba(255,200,80,0.08)');
            haloGrad.addColorStop(1, 'rgba(255,200,80,0)');
            ctx.fillStyle = haloGrad;
            ctx.fillRect(cx - h * 0.35, h * 0.05, h * 0.7, h * 0.65);

            // Cono de luz hacia abajo
            ctx.beginPath();
            ctx.moveTo(cx - 4, h * 0.4);
            ctx.lineTo(cx - 50, h * 0.72);
            ctx.lineTo(cx + 50, h * 0.72);
            ctx.lineTo(cx + 4, h * 0.4);
            ctx.closePath();
            var coneGrad = ctx.createLinearGradient(0, h * 0.4, 0, h * 0.72);
            coneGrad.addColorStop(0, 'rgba(255,220,120,0.12)');
            coneGrad.addColorStop(1, 'rgba(255,220,120,0)');
            ctx.fillStyle = coneGrad;
            ctx.fill();

            // Columna (poste)
            ctx.fillStyle = '#4a4a5a';
            ctx.fillRect(cx - 2.5, h * 0.4, 5, h * 0.32);

            // Base de columna
            ctx.fillStyle = '#5a5a6a';
            ctx.fillRect(cx - 6, h * 0.7, 12, h * 0.04);

            // Brazo de luminaria
            ctx.strokeStyle = '#5a5a6a';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(cx, h * 0.42);
            ctx.quadraticCurveTo(cx + 12, h * 0.38, cx + 4, h * 0.38);
            ctx.stroke();

            // Luminaria (cabeza)
            ctx.fillStyle = '#7a7a8a';
            ctx.beginPath();
            ctx.ellipse(cx, h * 0.39, 10, 4, 0, 0, Math.PI * 2);
            ctx.fill();

            // Foco encendido
            ctx.fillStyle = '#ffe082';
            ctx.beginPath();
            ctx.arc(cx, h * 0.4, 4, 0, Math.PI * 2);
            ctx.fill();

            // Brillo del foco
            ctx.fillStyle = 'rgba(255,235,59,0.6)';
            ctx.beginPath();
            ctx.arc(cx, h * 0.4, 2, 0, Math.PI * 2);
            ctx.fill();
        });

        // Reflejo en el pavimento
        columnas.forEach(function(cx) {
            var refGrad = ctx.createRadialGradient(cx, h * 0.85, 0, cx, h * 0.85, 40);
            refGrad.addColorStop(0, 'rgba(255,220,100,0.06)');
            refGrad.addColorStop(1, 'rgba(255,220,100,0)');
            ctx.fillStyle = refGrad;
            ctx.beginPath();
            ctx.ellipse(cx, h * 0.85, 40, 15, 0, 0, Math.PI * 2);
            ctx.fill();
        });

        // Datos
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.font = 'bold ' + (h * 0.035) + 'px Montserrat, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('120 columnas', w * 0.04, h * 0.95);

        ctx.textAlign = 'right';
        ctx.fillText('Alumbrado Público', w * 0.96, h * 0.95);
    }

    // Inicializar todos los canvas con data-thumbnail
    function initThumbnails() {
        var canvases = document.querySelectorAll('canvas[data-thumbnail]');
        canvases.forEach(function(canvas) {
            var type = canvas.getAttribute('data-thumbnail');
            // Asegurar tamano correcto
            var rect = canvas.getBoundingClientRect();
            if (rect.width > 0) {
                canvas.width = rect.width * (window.devicePixelRatio || 1);
                canvas.height = rect.height * (window.devicePixelRatio || 1);
                canvas.getContext('2d').scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
            }
            if (type === 'colectora-cloacal') drawColectoraCloacal(canvas);
            else if (type === 'expansion-red-agua') drawExpansionRedAgua(canvas);
            else if (type === 'red-agua-lanus') drawRedAguaLanus(canvas);
            else if (type === 'montaje-integral') drawMontajeIntegral(canvas);
            else if (type === 'alumbrado-publico') drawAlumbradoPublico(canvas);
        });
    }

    // Generar data URL para usar en img tags (index.html)
    window.generateThumbnailDataURL = function(type, width, height) {
        var canvas = document.createElement('canvas');
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        canvas.width = width;
        canvas.height = height;
        Object.defineProperty(canvas, 'offsetWidth', { get: function() { return width; }});
        Object.defineProperty(canvas, 'offsetHeight', { get: function() { return height; }});
        if (type === 'colectora-cloacal') drawColectoraCloacal(canvas);
        else if (type === 'expansion-red-agua') drawExpansionRedAgua(canvas);
        else if (type === 'red-agua-lanus') drawRedAguaLanus(canvas);
        else if (type === 'montaje-integral') drawMontajeIntegral(canvas);
        else if (type === 'alumbrado-publico') drawAlumbradoPublico(canvas);
        return canvas.toDataURL('image/png');
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThumbnails);
    } else {
        initThumbnails();
    }

    window.addEventListener('resize', initThumbnails);
})();
