window.ATLAS_GLOSSARY = [
  {
    "term": "LLM",
    "expansion": "Modelo de lenguaje de gran tamaño",
    "category": "Servicio de inferencia",
    "definition": "Un modelo neuronal que procesa y genera secuencias de tokens. El tamaño y la estructura de sus tensores determinan gran parte de las necesidades de cómputo, memoria y comunicación del servicio de inferencia.",
    "context": "El ejemplo de referencia utiliza un modelo decodificador denso de unos 70 000 millones de parámetros.",
    "topic": "models",
    "aliases": [
      "LLM",
      "large language models",
      "language model",
      "Modelo de lenguaje de gran tamaño",
      "modelo de lenguaje",
      "modelos de lenguaje de gran tamaño"
    ]
  },
  {
    "term": "HA",
    "expansion": "Alta disponibilidad",
    "category": "Servicio de inferencia",
    "definition": "Un diseño de servicio que mantiene disponibles las operaciones útiles a pesar de fallos o tareas de mantenimiento. Al medir la disponibilidad, hay que especificar la operación y la condición que determina su éxito.",
    "context": "La capacidad preparada en varias zonas protege la admisión de nuevas solicitudes; no recupera automáticamente los flujos interrumpidos.",
    "topic": "cell_a",
    "aliases": [
      "HA",
      "high availability",
      "Alta disponibilidad",
      "alta disponibilidad"
    ]
  },
  {
    "term": "API",
    "expansion": "Interfaz de programación de aplicaciones",
    "category": "Servicio de inferencia",
    "definition": "Una interfaz definida mediante la cual el software solicita una operación y recibe sus resultados. En una API de generación, el contrato también define la autenticación, los errores, la cancelación y el comportamiento de la transmisión en flujo.",
    "context": "La capa de entrada de la flota acepta solicitudes de generación mediante una API de transmisión en flujo.",
    "topic": "client",
    "aliases": [
      "API",
      "APIs",
      "Interfaz de programación de aplicaciones",
      "interfaz de programación",
      "interfaz de aplicaciones"
    ]
  },
  {
    "term": "SLO",
    "expansion": "Objetivo de nivel de servicio",
    "category": "Servicio de inferencia",
    "definition": "Una meta medible de un servicio, como la proporción de solicitudes que se completan correctamente dentro de un plazo. Las distintas etapas de una respuesta transmitida en flujo pueden necesitar objetivos separados.",
    "context": "El recorrido distingue la latencia hasta el primer token, los intervalos entre tokens y la finalización correcta del flujo.",
    "topic": "telemetry",
    "aliases": [
      "SLO",
      "SLOs",
      "service level objective",
      "Objetivo de nivel de servicio",
      "objetivo de nivel de servicio",
      "objetivos de servicio"
    ]
  },
  {
    "term": "SLA",
    "expansion": "Acuerdo de nivel de servicio",
    "category": "Servicio de inferencia",
    "definition": "Un acuerdo que especifica un compromiso de servicio y puede establecer compensaciones si se incumple. La medición exacta y las exclusiones se determinan en el acuerdo, no en un diagrama de arquitectura.",
    "context": "Este modelo didáctico no predice el cumplimiento de compromisos contractuales de disponibilidad ni de garantías de latencia.",
    "topic": "telemetry",
    "aliases": [
      "SLA",
      "SLAs",
      "service level agreement",
      "Acuerdo de nivel de servicio",
      "acuerdo de nivel de servicio",
      "compromiso de servicio"
    ]
  },
  {
    "term": "SRE",
    "expansion": "Ingeniería de fiabilidad de sitios",
    "category": "Servicio de inferencia",
    "definition": "Una disciplina de ingeniería para operar servicios fiables mediante objetivos explícitos, mediciones y automatización. Las decisiones de fiabilidad tienen en cuenta la capacidad, la sobrecarga y el comportamiento durante la recuperación.",
    "context": "La explicación de la sobrecarga aplica principios de SRE para preservar el trabajo útil completado durante los picos de tráfico.",
    "topic": "admission",
    "aliases": [
      "SRE",
      "site reliability",
      "Ingeniería de fiabilidad de sitios",
      "ingeniería de fiabilidad",
      "fiabilidad de sitios"
    ]
  },
  {
    "term": "TTFT",
    "expansion": "Tiempo hasta el primer token",
    "category": "Servicio de inferencia",
    "definition": "El tiempo transcurrido hasta que está disponible el primer token de salida, medido desde un punto de inicio explícito. Una medición desde la perspectiva del usuario puede incluir el tránsito por la red, la admisión, la espera en cola y el prellenado.",
    "context": "El tiempo de una iteración de decodificación, por sí solo, no permite predecir el TTFT de la solicitud.",
    "topic": "telemetry",
    "aliases": [
      "TTFT",
      "time-to-first-token",
      "Tiempo hasta el primer token",
      "tiempo hasta el primer token",
      "latencia del primer token"
    ]
  },
  {
    "term": "ITL",
    "expansion": "Latencia entre tokens",
    "category": "Servicio de inferencia",
    "definition": "El intervalo de tiempo entre dos tokens emitidos consecutivamente. Las mediciones en el motor, el servidor y el cliente pueden diferir, porque los búferes y la entrega por la red añaden retraso.",
    "context": "El prellenado por fragmentos busca evitar grandes pausas en el flujo cuando el procesamiento de la entrada comparte las GPU.",
    "topic": "chunked-prefill",
    "aliases": [
      "ITL",
      "inter token latency",
      "token gap",
      "Latencia entre tokens",
      "latencia entre tokens",
      "intervalo entre tokens"
    ]
  },
  {
    "term": "TPOT",
    "expansion": "Tiempo por token de salida",
    "category": "Servicio de inferencia",
    "definition": "El tiempo medio empleado en generar cada token de salida después del primero; suele calcularse dividiendo el tiempo entre el primer y el último token por el número de tokens restantes. Es un promedio y no revela cada intervalo largo individual.",
    "context": "Al evaluar decisiones sobre la formación de lotes, compara el TPOT con los intervalos entre tokens de los percentiles altos.",
    "topic": "telemetry",
    "aliases": [
      "TPOT",
      "time-per-output-token",
      "Tiempo por token de salida",
      "tiempo por token de salida",
      "tiempo medio por token"
    ]
  },
  {
    "term": "Caché KV",
    "expansion": "Caché de claves y valores de atención",
    "category": "Servicio de inferencia",
    "definition": "Tensores de claves y valores almacenados a partir de tokens ya procesados, que la atención utiliza en pasos posteriores del modelo. Es estado de ejecución del modelo, con una semántica distinta a la de una base de datos o una caché de clave-valor de una aplicación.",
    "context": "Los bloques lógicos de cada secuencia se asignan a páginas KV físicas en la HBM de cada rango de GPU; Redis queda fuera de esta ruta de memoria de atención.",
    "topic": "kvpages",
    "aliases": [
      "KV cache",
      "KV",
      "K/V",
      "key value cache",
      "transformer KV",
      "Caché KV",
      "Caché de claves y valores de atención",
      "caché KV",
      "cache KV",
      "caché de claves y valores",
      "caché de atención"
    ]
  },
  {
    "term": "Redis",
    "expansion": "Producto Redis de almacenamiento de datos",
    "category": "Servicio de inferencia",
    "definition": "Un almacén de datos en memoria que suele utilizarse para cachés de aplicaciones, contadores y datos de coordinación de corta duración. Sus valores son independientes de los tensores de atención del transformador.",
    "context": "Redis puede almacenar asignaciones temporales de cuota e indicaciones de enrutamiento, mientras que las claves y valores de atención suelen permanecer en la memoria de las GPU.",
    "topic": "redis",
    "aliases": [
      "Redis",
      "Redis cache",
      "application cache",
      "Producto Redis de almacenamiento de datos",
      "caché de Redis",
      "caché de aplicación",
      "almacén de datos"
    ]
  },
  {
    "term": "DB",
    "expansion": "Base de datos",
    "category": "Servicio de inferencia",
    "definition": "Un sistema para almacenar y consultar datos estructurados de una aplicación, con un comportamiento definido de durabilidad y consistencia. El carácter de un registro como fuente de referencia depende de la configuración real de replicación y recuperación de la base de datos.",
    "context": "La base de datos duradera representa la fuente de referencia sobre los clientes, los registros de uso y la configuración versionada.",
    "topic": "database",
    "aliases": [
      "DB",
      "database",
      "durable database",
      "Base de datos",
      "base de datos",
      "base de datos duradera"
    ]
  },
  {
    "term": "EOS",
    "expansion": "Token de fin de secuencia",
    "category": "Servicio de inferencia",
    "definition": "Un token designado que puede indicar que la generación debe detenerse. Otras condiciones de parada pueden ser un límite de salida, la coincidencia con una cadena de parada, un plazo o una cancelación.",
    "context": "El componente responsable del muestreo y del flujo debe distinguir una parada normal de una generación fallida o cancelada.",
    "topic": "sample",
    "aliases": [
      "EOS",
      "end of sequence",
      "Token de fin de secuencia",
      "fin de secuencia",
      "token de fin de secuencia"
    ]
  },
  {
    "term": "RNG",
    "expansion": "Generador de números aleatorios",
    "category": "Servicio de inferencia",
    "definition": "Un mecanismo que proporciona los valores aleatorios utilizados por las operaciones probabilísticas. El muestreo puede utilizar este estado para seleccionar un token de la distribución de salida del modelo.",
    "context": "Reproducir una continuación obtenida por muestreo puede requerir un modelo, una ejecución y un estado del generador aleatorio compatibles.",
    "topic": "sample",
    "aliases": [
      "RNG",
      "random number generator",
      "Generador de números aleatorios",
      "generador de números aleatorios",
      "números aleatorios"
    ]
  },
  {
    "term": "Prellenado",
    "expansion": "Fase de procesamiento de la entrada",
    "category": "Servicio de inferencia",
    "definition": "La fase que procesa los tokens de entrada, construye su estado KV de atención y calcula las puntuaciones sin normalizar usadas para seleccionar el primer token de salida. Una entrada larga puede dividirse en varios fragmentos planificados.",
    "context": "Dos réplicas de prellenado por célula preparan el estado de la entrada para el conjunto de réplicas de decodificación.",
    "topic": "prefill",
    "aliases": [
      "Prefill",
      "prompt processing",
      "Prellenado",
      "Fase de procesamiento de la entrada",
      "prellenado",
      "procesamiento de la entrada"
    ]
  },
  {
    "term": "Decodificación",
    "expansion": "Fase de generación autorregresiva",
    "category": "Servicio de inferencia",
    "definition": "Los pasos repetidos del modelo que consumen tokens generados y producen distribuciones para los tokens siguientes. La decodificación ordinaria hace avanzar cada secuencia activa aproximadamente un token por iteración del modelo.",
    "context": "Cuatro réplicas de decodificación por célula generan el resto de la salida después de recibir el estado del prellenado.",
    "topic": "batch",
    "aliases": [
      "Decode",
      "decoding",
      "autoregressive decode",
      "Decodificación",
      "Fase de generación autorregresiva",
      "decodificación",
      "generación autorregresiva",
      "decodificación autorregresiva"
    ]
  },
  {
    "term": "Formación continua de lotes",
    "expansion": "Planificación por iteración",
    "category": "Servicio de inferencia",
    "definition": "Una técnica del servicio de inferencia que cambia la composición del lote entre iteraciones del modelo conforme llegan o terminan las solicitudes. No es necesario que todas las solicitudes esperen a la secuencia más larga de un lote fijo.",
    "context": "El planificador de cada réplica reúne un nuevo conjunto de trabajo de tokens apto para la siguiente iteración.",
    "topic": "scheduler",
    "aliases": [
      "Continuous batching",
      "iteration-level batching",
      "dynamic batching",
      "Formación continua de lotes",
      "Planificación por iteración",
      "formación continua de lotes",
      "lotes continuos",
      "planificación por iteración"
    ]
  },
  {
    "term": "Caché de prefijos",
    "expansion": "Reutilización de KV compatible de la entrada",
    "category": "Servicio de inferencia",
    "definition": "La reutilización de las claves y valores almacenados de un prefijo causal de tokens ya procesado. Una reutilización correcta exige una identidad de cómputo compatible, que puede incluir el modelo, el adaptador, la entrada y la información de aislamiento entre clientes.",
    "context": "Un acierto de prefijo evita repetir el prellenado, pero cada paso de decodificación sigue aplicando atención al prefijo conservado.",
    "topic": "prefix",
    "aliases": [
      "Prefix caching",
      "automatic prefix caching",
      "prefix reuse",
      "Caché de prefijos",
      "Reutilización de KV compatible de la entrada",
      "caché de prefijos",
      "cache de prefijos",
      "reutilización de prefijos"
    ]
  },
  {
    "term": "PagedAttention",
    "expansion": "Atención con almacenamiento KV asignado por bloques",
    "category": "Servicio de inferencia",
    "definition": "Un diseño de atención que asigna bloques lógicos de tokens a bloques KV físicos no contiguos. Reduce el desperdicio de memoria asignada y permite compartirla, sin eliminar la necesidad de que la atención lea el contexto conservado.",
    "context": "La vista de la caché muestra bloques de secuencia, tablas de asignación y páginas físicas de memoria de GPU.",
    "topic": "kvpages",
    "aliases": [
      "PagedAttention",
      "paged attention",
      "Atención con almacenamiento KV asignado por bloques",
      "atención paginada",
      "atención por bloques"
    ]
  },
  {
    "term": "Prellenado por fragmentos",
    "expansion": "Procesamiento de la entrada dividido en fragmentos de tokens",
    "category": "Servicio de inferencia",
    "definition": "La división de un prellenado largo en unidades menores que pueden compartir el presupuesto de cada iteración con otro trabajo. El tamaño del fragmento modifica el equilibrio entre el avance de la entrada y la latencia de decodificación.",
    "context": "El planificador ilustrado prioriza el trabajo de decodificación apto para ejecutarse y asigna el presupuesto restante de tokens a fragmentos de la entrada.",
    "topic": "chunked-prefill",
    "aliases": [
      "Chunked prefill",
      "prefill chunks",
      "Prellenado por fragmentos",
      "Procesamiento de la entrada dividido en fragmentos de tokens",
      "prellenado por fragmentos",
      "fragmentos de prellenado"
    ]
  },
  {
    "term": "Decodificación especulativa",
    "expansion": "Generación mediante propuestas y verificación",
    "category": "Servicio de inferencia",
    "definition": "Un método de generación que propone varios tokens con bajo coste y los verifica con el modelo objetivo. Los procedimientos de aceptación correctos pueden conservar la distribución del modelo objetivo y reducir el número de ejecuciones sucesivas de ese modelo.",
    "context": "Es una variante avanzada que queda fuera de la calculadora de rendimiento, que supone un token por secuencia en cada iteración.",
    "topic": "speculation",
    "aliases": [
      "Speculative decoding",
      "speculation",
      "draft model",
      "Decodificación especulativa",
      "Generación mediante propuestas y verificación",
      "decodificación especulativa",
      "especulación",
      "modelo de propuestas"
    ]
  },
  {
    "term": "Token",
    "expansion": "Unidad del vocabulario del modelo",
    "category": "Servicio de inferencia",
    "definition": "Un elemento de la secuencia codificada de entrada o salida del modelo, como parte de una palabra, un signo de puntuación o un marcador especial. Contar tokens no equivale a contar palabras ni caracteres.",
    "context": "Los presupuestos de planificación, la longitud del contexto, el crecimiento de KV y la tasa de generación se expresan en tokens.",
    "topic": "prefill",
    "aliases": [
      "Token",
      "token IDs",
      "token ID",
      "Unidad del vocabulario del modelo",
      "tokens",
      "identificador de token",
      "identificadores de tokens"
    ]
  },
  {
    "term": "Célula",
    "expansion": "Unidad de aislamiento de fallos de la aplicación",
    "category": "Servicio de inferencia",
    "definition": "Una partición acotada del servicio de inferencia diseñada para limitar el impacto de fallos, sobrecargas y despliegues. Una célula es un límite de la aplicación; una zona de disponibilidad es un límite de la infraestructura.",
    "context": "El ejemplo sitúa una célula de servicio de inferencia en cada una de tres zonas, sin equiparar ambos conceptos.",
    "topic": "cell_a",
    "aliases": [
      "Cell",
      "serving cell",
      "bulkhead",
      "Célula",
      "Unidad de aislamiento de fallos de la aplicación",
      "célula",
      "célula de inferencia",
      "aislamiento de fallos"
    ]
  },
  {
    "term": "Réplica",
    "expansion": "Instancia completa del modelo para el servicio de inferencia",
    "category": "Servicio de inferencia",
    "definition": "Una instancia lógica completa del modelo capaz de ejecutar su propio lote de trabajo. Una réplica puede contener varios rangos de GPU que cooperan, en lugar de una sola GPU.",
    "context": "Cada nodo de prellenado o decodificación ilustrado aloja una réplica TP8 del modelo.",
    "topic": "dp",
    "aliases": [
      "Replica",
      "model replica",
      "serving replica",
      "Réplica",
      "Instancia completa del modelo para el servicio de inferencia",
      "réplica",
      "réplica del modelo",
      "réplica de inferencia"
    ]
  },
  {
    "term": "TP",
    "expansion": "Paralelismo tensorial",
    "category": "Paralelismo",
    "definition": "La división de tensores y sus operaciones entre dispositivos que cooperan. Los rangos intercambian o combinan resultados parciales en los puntos necesarios del cálculo del modelo.",
    "context": "TP8 significa que ocho rangos de GPU ejecutan conjuntamente una réplica del modelo de referencia en un nodo.",
    "topic": "tp",
    "aliases": [
      "TP",
      "TP8",
      "TP16",
      "tensor-parallel",
      "tensor parallel",
      "Paralelismo tensorial",
      "paralelismo tensorial",
      "paralelismo de tensores"
    ]
  },
  {
    "term": "PP",
    "expansion": "Paralelismo por etapas",
    "category": "Paralelismo",
    "definition": "La distribución de las etapas del modelo, normalmente grupos de capas, entre dispositivos. Las activaciones pasan de una etapa a otra y varios microlotes pueden mantener ocupadas las etapas cuando la planificación lo permite.",
    "context": "PP1 significa que la réplica ilustrada tiene una sola etapa; sus ocho dispositivos son rangos de paralelismo tensorial.",
    "topic": "pp",
    "aliases": [
      "PP",
      "PP1",
      "pipeline-parallel",
      "pipeline parallel",
      "Paralelismo por etapas",
      "paralelismo por etapas",
      "paralelismo segmentado",
      "paralelismo de tubería"
    ]
  },
  {
    "term": "DP",
    "expansion": "Paralelismo de datos",
    "category": "Paralelismo",
    "definition": "El uso de varias réplicas completas del modelo para procesar solicitudes o lotes independientes. Aumenta la capacidad agregada del servicio de inferencia sin repartir el cálculo del modelo de una misma solicitud entre esas réplicas.",
    "context": "Las distintas réplicas de decodificación, tanto dentro de una célula como entre células, proporcionan capacidad de inferencia con paralelismo de datos.",
    "topic": "dp",
    "aliases": [
      "DP",
      "data-parallel",
      "data parallel",
      "Paralelismo de datos",
      "paralelismo de datos"
    ]
  },
  {
    "term": "EP",
    "expansion": "Paralelismo de expertos",
    "category": "Paralelismo",
    "definition": "La distribución de los expertos de un modelo de mezcla de expertos entre dispositivos. Las representaciones de tokens se envían a los expertos seleccionados y los resultados se devuelven o combinan.",
    "context": "El paralelismo de expertos sirve como comparación avanzada; el modelo de referencia de la calculadora es denso.",
    "topic": "ep",
    "aliases": [
      "EP",
      "expert-parallel",
      "expert parallel",
      "Paralelismo de expertos",
      "paralelismo de expertos"
    ]
  },
  {
    "term": "MoE",
    "expansion": "Mezcla de expertos",
    "category": "Paralelismo",
    "definition": "Una arquitectura de modelo con varias redes expertas y un enrutador que selecciona qué expertos procesan cada token. Puede que solo una parte de los parámetros de expertos esté activa para un token, aunque el modelo desplegado completo sigue necesitando almacenamiento.",
    "context": "El análisis detallado de MoE añade tráfico de enrutamiento hacia expertos y desequilibrio de carga al esquema del modelo denso.",
    "topic": "ep",
    "aliases": [
      "MoE",
      "mixture-of-experts",
      "experts",
      "Mezcla de expertos",
      "mezcla de expertos",
      "expertos"
    ]
  },
  {
    "term": "GQA",
    "expansion": "Atención con consultas agrupadas",
    "category": "Paralelismo",
    "definition": "Un tipo de atención en el que varias cabezas de consulta comparten cada cabeza de claves y valores. Reduce la cantidad de K/V almacenada frente a asignar a cada cabeza de consulta sus propias cabezas de claves y valores.",
    "context": "El modelo de referencia tiene 64 cabezas de consulta, pero solo 8 cabezas KV; por eso el cálculo de capacidad de KV usa el número 8.",
    "topic": "kv-layout",
    "aliases": [
      "GQA",
      "grouped query attention",
      "Atención con consultas agrupadas",
      "atención con consultas agrupadas",
      "consultas agrupadas"
    ]
  },
  {
    "term": "MQA",
    "expansion": "Atención con múltiples consultas",
    "category": "Paralelismo",
    "definition": "Un tipo de atención en el que todas las cabezas de consulta comparten una cabeza de claves y una cabeza de valores. Comparte KV de forma más intensa que la atención con consultas agrupadas del modelo de referencia.",
    "context": "MQA sirve para comparar cómo el número de cabezas KV modifica el tamaño de la caché.",
    "topic": "kv-layout",
    "aliases": [
      "MQA",
      "multi query attention",
      "Atención con múltiples consultas",
      "atención con múltiples consultas",
      "atención multiconsulta"
    ]
  },
  {
    "term": "Rango",
    "expansion": "Participante en un cálculo distribuido",
    "category": "Paralelismo",
    "definition": "Un proceso o ejecutor identificado que participa en un grupo distribuido del modelo. En la disposición ilustrada, cada rango de paralelismo tensorial se ejecuta en una GPU, aunque esa correspondencia es una decisión de implementación.",
    "context": "Un rango bloqueado o fallido puede retrasar o invalidar la ejecución de toda la réplica TP8.",
    "topic": "rank-failure",
    "aliases": [
      "Rank",
      "GPU rank",
      "TP rank",
      "Rango",
      "Participante en un cálculo distribuido",
      "rango",
      "rango de GPU",
      "rango TP"
    ]
  },
  {
    "term": "GPU",
    "expansion": "Unidad de procesamiento gráfico",
    "category": "Hardware",
    "definition": "Un procesador que ejecuta muchas operaciones en paralelo y aporta recursos de ejecución especializados para operaciones matriciales. Su tasa de cómputo, capacidad de memoria y ancho de banda de memoria son restricciones distintas.",
    "context": "Cada nodo de referencia contiene ocho GPU de la clase H100 que cooperan en una réplica del modelo.",
    "topic": "hbm",
    "aliases": [
      "GPU",
      "GPUs",
      "accelerator",
      "Unidad de procesamiento gráfico",
      "unidad de procesamiento gráfico",
      "acelerador"
    ]
  },
  {
    "term": "CPU",
    "expansion": "Unidad central de procesamiento",
    "category": "Hardware",
    "definition": "El procesador anfitrión que ejecuta software de propósito general y coordina el trabajo de los dispositivos. En inferencia suele encargarse del estado de las solicitudes, la planificación, el envío de trabajo y parte de la tokenización o la transmisión en flujo.",
    "context": "Las pausas de lanzamiento o sincronización de la CPU pueden dejar inactiva a la GPU incluso cuando hay capacidad de cómputo disponible.",
    "topic": "cpu",
    "aliases": [
      "CPU",
      "host CPU",
      "Unidad central de procesamiento",
      "unidad central de procesamiento",
      "CPU anfitriona",
      "procesador anfitrión"
    ]
  },
  {
    "term": "RAM",
    "expansion": "Memoria de acceso aleatorio",
    "category": "Hardware",
    "definition": "Memoria que permite leer o escribir datos mediante una dirección. Al hablar de servidores, la RAM del anfitrión suele referirse a la memoria principal del sistema utilizada por la CPU, no a la memoria de dispositivo de la GPU.",
    "context": "La RAM del anfitrión almacena el estado de las solicitudes y los búferes intermedios, y puede recibir datos descargados de la GPU mediante una gestión explícita.",
    "topic": "ram",
    "aliases": [
      "RAM",
      "host RAM",
      "system memory",
      "Memoria de acceso aleatorio",
      "memoria de acceso aleatorio",
      "RAM del anfitrión",
      "memoria del sistema"
    ]
  },
  {
    "term": "DRAM",
    "expansion": "Memoria dinámica de acceso aleatorio",
    "category": "Hardware",
    "definition": "Una tecnología de memoria que almacena datos en celdas que necesitan refresco periódico. Se utiliza para grandes capacidades de memoria principal; HBM también es una forma de DRAM, encapsulada para proporcionar un gran ancho de banda.",
    "context": "La DRAM del anfitrión tiene un espacio de direcciones y una ruta de transferencia distintos de los de la HBM local de la GPU.",
    "topic": "ram",
    "aliases": [
      "DRAM",
      "host DRAM",
      "Memoria dinámica de acceso aleatorio",
      "memoria dinámica",
      "DRAM del anfitrión"
    ]
  },
  {
    "term": "SRAM",
    "expansion": "Memoria estática de acceso aleatorio",
    "category": "Hardware",
    "definition": "Una tecnología de memoria que conserva los valores mientras recibe alimentación, sin refresco periódico. Suele utilizarse para estructuras rápidas dentro del chip, cuya capacidad es mucho menor que la de la memoria externa.",
    "context": "Las cachés de GPU y los bloques de datos reutilizados explícitamente dentro del chip reducen el tráfico repetido hacia HBM.",
    "topic": "sram",
    "aliases": [
      "SRAM",
      "on-chip SRAM",
      "Memoria estática de acceso aleatorio",
      "memoria estática",
      "SRAM interna"
    ]
  },
  {
    "term": "HBM",
    "expansion": "Memoria de alto ancho de banda",
    "category": "Hardware",
    "definition": "Memoria apilada conectada a un acelerador mediante una interfaz muy ancha. Almacena grandes conjuntos de tensores de trabajo cerca de la GPU, pero acceder a ella repetidamente sigue siendo mucho más lento que reutilizar los datos dentro del chip.",
    "context": "Los pesos, las páginas KV, las activaciones y los búferes de ejecución comparten los 80 GB nominales de cada GPU de referencia.",
    "topic": "hbm",
    "aliases": [
      "HBM",
      "GPU memory",
      "device memory",
      "Memoria de alto ancho de banda",
      "memoria de alto ancho de banda",
      "memoria de GPU",
      "memoria de dispositivo"
    ]
  },
  {
    "term": "L1",
    "expansion": "Caché de primer nivel",
    "category": "Hardware",
    "definition": "Una caché cercana a una unidad de ejecución que puede atender accesos sin acudir a una memoria más distante. En esta arquitectura de GPU, L1 y la memoria compartida gestionada explícitamente utilizan un recurso interno del chip que se puede configurar.",
    "context": "La vista del SM distingue la caché L1 gestionada por hardware de los bloques de memoria compartida gestionados por software.",
    "topic": "sram",
    "aliases": [
      "L1",
      "L1 cache",
      "level 1 cache",
      "Caché de primer nivel",
      "caché L1",
      "caché de primer nivel"
    ]
  },
  {
    "term": "L2",
    "expansion": "Caché de segundo nivel",
    "category": "Hardware",
    "definition": "Una caché mayor compartida por los multiprocesadores de flujo de la GPU. Reutilizar datos de L2 puede reducir el tráfico de HBM, según los patrones de acceso y el tamaño del conjunto de trabajo.",
    "context": "El ejemplo H100 SXM tiene 50 MB de L2, muy por debajo del tamaño del modelo completo y de sus conjuntos de trabajo KV.",
    "topic": "l2",
    "aliases": [
      "L2",
      "L2 cache",
      "level 2 cache",
      "Caché de segundo nivel",
      "caché L2",
      "caché de segundo nivel"
    ]
  },
  {
    "term": "SM",
    "expansion": "Multiprocesador de flujo",
    "category": "Hardware",
    "definition": "Una unidad de ejecución de la GPU que planifica grupos de hilos y contiene recursos aritméticos, registros y memoria compartida. Muchos SM ejecutan simultáneamente partes de una rutina de cómputo de la GPU.",
    "context": "El ejemplo H100 SXM tiene 132 SM; al ampliar más la vista se observan las rutas internas de datos de uno de ellos.",
    "topic": "sm",
    "aliases": [
      "SM",
      "SMs",
      "streaming multiprocessors",
      "Multiprocesador de flujo",
      "multiprocesador de flujo",
      "multiprocesadores de flujo"
    ]
  },
  {
    "term": "MLP",
    "expansion": "Perceptrón multicapa",
    "category": "Hardware",
    "definition": "Una red neuronal de propagación hacia delante formada por transformaciones lineales aprendidas y no linealidades. Los bloques del transformador utilizan estas redes junto con la atención.",
    "context": "El modelo de referencia ejecuta atención y un MLP en cada capa del transformador.",
    "topic": "batch",
    "aliases": [
      "MLP",
      "feed-forward network",
      "feedforward",
      "Perceptrón multicapa",
      "perceptrón multicapa",
      "red de propagación hacia delante"
    ]
  },
  {
    "term": "QKV",
    "expansion": "Consulta, clave y valor",
    "category": "Hardware",
    "definition": "Los tres tipos de vectores formados por las proyecciones de atención. Las consultas seleccionan información al compararse con las claves; los pesos resultantes combinan los valores.",
    "context": "Cada paso crea nuevos Q/K/V, mientras que las claves y los valores anteriores se conservan en la caché KV.",
    "topic": "batch",
    "aliases": [
      "QKV",
      "Q/K/V",
      "queries keys values",
      "Consulta, clave y valor",
      "consulta clave valor",
      "consultas claves valores"
    ]
  },
  {
    "term": "QK / AV",
    "expansion": "Productos consulta–clave y pesos de atención–valor",
    "category": "Hardware",
    "definition": "QK genera puntuaciones de atención comparando consultas con claves, normalmente con la matriz de claves transpuesta. Tras la normalización y el enmascaramiento, AV combina los pesos de atención con los valores.",
    "context": "Estos productos explican por qué el trabajo de atención durante la decodificación y las lecturas KV aumentan con el contexto conservado.",
    "topic": "flash",
    "aliases": [
      "QK / AV",
      "QK/AV",
      "QK",
      "AV",
      "attention products",
      "Productos consulta–clave y pesos de atención–valor",
      "productos de atención",
      "producto consulta clave",
      "producto atención valor"
    ]
  },
  {
    "term": "CUDA",
    "expansion": "Plataforma de cómputo CUDA de NVIDIA",
    "category": "Hardware",
    "definition": "La plataforma y el modelo de programación de NVIDIA para ejecutar trabajo en sus GPU. El nombre abarca interfaces de software y mecanismos de ejecución; no es un chip independiente dentro del nodo.",
    "context": "El ejecutor utiliza funciones de CUDA para enviar rutinas de cómputo, gestionar la memoria del dispositivo y coordinar transferencias.",
    "topic": "cpu",
    "aliases": [
      "CUDA",
      "CUDA runtime",
      "Plataforma de cómputo CUDA de NVIDIA",
      "plataforma CUDA",
      "entorno de ejecución CUDA"
    ]
  },
  {
    "term": "CUDA Graph",
    "expansion": "Grafo capturado de trabajo de la GPU",
    "category": "Hardware",
    "definition": "Una representación reutilizable de operaciones y sus dependencias que puede enviarse con menos trabajo repetido de lanzamiento desde el anfitrión. Las dimensiones dinámicas y los supuestos sobre almacenamiento pueden exigir distintas variantes capturadas.",
    "context": "El envío mediante grafos reduce las pausas recurrentes de la CPU en el bucle de decodificación de referencia.",
    "topic": "graphs",
    "aliases": [
      "CUDA Graph",
      "CUDA Graphs",
      "graph capture",
      "graph replay",
      "Grafo capturado de trabajo de la GPU",
      "grafo CUDA",
      "grafos CUDA",
      "captura de grafos",
      "repetición de grafos"
    ]
  },
  {
    "term": "TMA",
    "expansion": "Acelerador de memoria tensorial",
    "category": "Hardware",
    "definition": "Un mecanismo de hardware de Hopper para mover de forma asíncrona bloques multidimensionales de tensores. Ayuda a separar el trabajo de carga de bloques de los grupos de hilos que los consumen.",
    "context": "La explicación del SM presenta TMA como una forma de alimentar bloques de memoria compartida mientras continúa el cálculo.",
    "topic": "sram",
    "aliases": [
      "TMA",
      "tensor memory accelerator",
      "Acelerador de memoria tensorial",
      "acelerador de memoria tensorial"
    ]
  },
  {
    "term": "Tensor Core",
    "expansion": "Unidad especializada en aritmética matricial",
    "category": "Hardware",
    "definition": "Un recurso de ejecución de la GPU que realiza eficientemente las operaciones compatibles de multiplicación y acumulación de matrices. El rendimiento real depende de la precisión, las dimensiones, el suministro de datos y la implementación de la rutina de cómputo.",
    "context": "Los Tensor Cores aceleran las operaciones matriciales de las proyecciones y los MLP, pero no eliminan los cuellos de botella de HBM ni de las operaciones colectivas.",
    "topic": "sm",
    "aliases": [
      "Tensor Core",
      "Tensor Cores",
      "tensor units",
      "Unidad especializada en aritmética matricial",
      "núcleo tensorial",
      "núcleos tensoriales",
      "unidad matricial"
    ]
  },
  {
    "term": "NUMA",
    "expansion": "Acceso no uniforme a la memoria",
    "category": "Hardware",
    "definition": "Una organización del sistema en la que el coste de acceder a la memoria depende del zócalo de procesador o dominio de localidad al que pertenece. Por eso, la ubicación de los dispositivos y de los búferes del anfitrión puede afectar al rendimiento de las transferencias.",
    "context": "Fija la afinidad de los hilos ejecutores y asigna la memoria intermedia teniendo en cuenta la topología de CPU, NIC y PCIe del nodo.",
    "topic": "pcie",
    "aliases": [
      "NUMA",
      "nonuniform memory access",
      "Acceso no uniforme a la memoria",
      "acceso no uniforme a la memoria",
      "localidad de memoria"
    ]
  },
  {
    "term": "ECC",
    "expansion": "Código de corrección de errores",
    "category": "Hardware",
    "definition": "Información redundante utilizada para detectar bits alterados y corregirlos dentro de los límites del código. Los errores corregibles y los no corregibles tienen consecuencias operativas distintas.",
    "context": "La supervisión del estado de las GPU combina señales ECC con el avance de la ejecución, el estado de los enlaces y la información de recuperación.",
    "topic": "health",
    "aliases": [
      "ECC",
      "error correction",
      "ECC errors",
      "Código de corrección de errores",
      "código de corrección de errores",
      "corrección de errores",
      "errores ECC"
    ]
  },
  {
    "term": "Xid",
    "expansion": "Identificador de diagnóstico del controlador de NVIDIA",
    "category": "Hardware",
    "definition": "Una categoría identificada de informes de error del controlador de GPU de NVIDIA. El identificador y las pruebas que lo rodean ayudan a determinar el fallo y la acción de recuperación necesaria; Xid no es una métrica de disponibilidad.",
    "context": "Antes de devolver capacidad al servicio, las decisiones sobre el estado del nodo deben tener en cuenta el contexto de Xid y las indicaciones de recuperación del fabricante.",
    "topic": "health",
    "aliases": [
      "Xid",
      "Xid errors",
      "XID",
      "Identificador de diagnóstico del controlador de NVIDIA",
      "errores Xid",
      "diagnóstico Xid"
    ]
  },
  {
    "term": "DCGM",
    "expansion": "Gestor de GPU para centros de datos",
    "category": "Hardware",
    "definition": "Software de NVIDIA para gestionar y supervisar GPU de centros de datos. Sus métricas incluyen señales de estado y de análisis del rendimiento, cuyo muestreo y agregación deben entenderse.",
    "context": "Los contadores de DCGM ayudan a localizar síntomas en las GPU, mientras que las trazas de solicitudes y las cronologías de las rutinas de cómputo explican su efecto en los usuarios.",
    "topic": "profile",
    "aliases": [
      "DCGM",
      "NVIDIA DCGM",
      "Gestor de GPU para centros de datos",
      "gestor de GPU",
      "supervisión de GPU"
    ]
  },
  {
    "term": "OOM",
    "expansion": "Memoria insuficiente",
    "category": "Hardware",
    "definition": "Un fallo al intentar satisfacer una asignación de memoria o el presupuesto requerido por el conjunto de trabajo. Cargar correctamente los pesos del modelo no demuestra que quede memoria suficiente para las solicitudes activas y los búferes temporales.",
    "context": "El experimento desactiva la tasa de procesamiento estimada cuando los pesos, KV y la reserva de ejecución superan 80 GB por rango.",
    "topic": "hbm",
    "aliases": [
      "OOM",
      "out-of-memory",
      "Memoria insuficiente",
      "memoria insuficiente",
      "sin memoria",
      "agotamiento de memoria"
    ]
  },
  {
    "term": "SXM",
    "expansion": "Formato de módulo GPU SXM de NVIDIA",
    "category": "Hardware",
    "definition": "El formato de módulo GPU de alto rendimiento de NVIDIA y su conexión a la placa. Es un nombre de producto o plataforma, no una unidad de ancho de banda ni una garantía sobre todas las configuraciones de GPU.",
    "context": "Las cifras de hardware de este ejemplo describen H100 SXM, no la variante en tarjeta PCIe, cuyas especificaciones son distintas.",
    "topic": "hbm",
    "aliases": [
      "SXM",
      "H100 SXM",
      "SXM module",
      "Formato de módulo GPU SXM de NVIDIA",
      "módulo SXM",
      "formato SXM"
    ]
  },
  {
    "term": "HGX",
    "expansion": "Plataforma NVIDIA HGX de varias GPU",
    "category": "Hardware",
    "definition": "La plataforma de NVIDIA para integrar varias GPU de centro de datos y su interconexión de alta velocidad. El servidor construido alrededor de ella sigue determinando la ubicación de CPU, memoria, NIC y PCIe.",
    "context": "El nodo de ocho GPU ilustrado es un esquema de tipo HGX, no un diagrama literal del cableado de una placa base.",
    "topic": "nvlink",
    "aliases": [
      "HGX",
      "NVIDIA HGX",
      "HGX platform",
      "Plataforma NVIDIA HGX de varias GPU",
      "plataforma HGX",
      "plataforma de varias GPU"
    ]
  },
  {
    "term": "FlashAttention",
    "expansion": "Algoritmo de atención exacta optimizado para entrada y salida",
    "category": "Hardware",
    "definition": "Un algoritmo de atención que divide el cálculo en bloques y evita escribir la matriz completa de puntuaciones de atención en HBM. Reduce el tráfico de memoria sin convertir en lineal el coste de cómputo de la atención exacta sobre entradas largas.",
    "context": "La vista del SM muestra cómo mantener bloques de atención y estado intermedio cerca de las unidades de cómputo.",
    "topic": "flash",
    "aliases": [
      "FlashAttention",
      "Flash Attention",
      "flash attention",
      "Algoritmo de atención exacta optimizado para entrada y salida",
      "atención exacta por bloques",
      "atención optimizada para memoria"
    ]
  },
  {
    "term": "TLS",
    "expansion": "Seguridad de la capa de transporte",
    "category": "Redes",
    "definition": "Un protocolo que protege la comunicación de red mediante cifrado, comprobaciones de integridad y autenticación de los participantes. Por sí solo, no decide si un solicitante autenticado tiene permiso para utilizar un modelo.",
    "context": "La capa de entrada global termina las conexiones TLS antes de la autorización, la admisión y el enrutamiento regional.",
    "topic": "edge",
    "aliases": [
      "TLS",
      "TLS termination",
      "Seguridad de la capa de transporte",
      "seguridad de la capa de transporte",
      "terminación TLS"
    ]
  },
  {
    "term": "WAF",
    "expansion": "Cortafuegos de aplicaciones web",
    "category": "Redes",
    "definition": "Una capa de filtrado de tráfico que aplica reglas a las solicitudes web para ayudar a rechazar tráfico no deseado o abusivo. Es independiente de los presupuestos de tokens específicos del modelo y de la admisión a las GPU.",
    "context": "La capa de entrada incluye filtrado WAF antes de que las solicitudes accedan a la costosa ruta de generación.",
    "topic": "edge",
    "aliases": [
      "WAF",
      "web application firewall",
      "Cortafuegos de aplicaciones web",
      "cortafuegos de aplicaciones web",
      "cortafuegos web"
    ]
  },
  {
    "term": "HTTP",
    "expansion": "Protocolo de transferencia de hipertexto",
    "category": "Redes",
    "definition": "El protocolo de aplicación utilizado por muchas API de solicitud y respuesta. Un estado inicial correcto no garantiza que una respuesta transmitida en flujo termine correctamente.",
    "context": "Un flujo de generación puede fallar después de que el servidor haya enviado HTTP 200.",
    "topic": "client",
    "aliases": [
      "HTTP",
      "HTTP 200",
      "HTTPS",
      "Protocolo de transferencia de hipertexto",
      "protocolo de transferencia de hipertexto"
    ]
  },
  {
    "term": "SSE",
    "expansion": "Eventos enviados por el servidor",
    "category": "Redes",
    "definition": "Un formato y mecanismo de entrega para enviar un flujo de eventos del servidor al cliente a través de una respuesta HTTP. El cliente debe interpretar los tipos de evento y las condiciones de finalización, no solo la apertura de la conexión.",
    "context": "La explicación de los flujos distingue eventos de tokens, finalización, cancelación y errores durante el flujo.",
    "topic": "client",
    "aliases": [
      "SSE",
      "server sent events",
      "event stream",
      "Eventos enviados por el servidor",
      "eventos enviados por el servidor",
      "flujo de eventos"
    ]
  },
  {
    "term": "JWT",
    "expansion": "Token web JSON",
    "category": "Redes",
    "definition": "Un formato estandarizado para representar declaraciones cuya integridad puede protegerse, normalmente con una firma digital. La verificación debe comprobar el emisor y el destinatario previstos, así como las restricciones de validez pertinentes.",
    "context": "La capa de entrada puede verificar localmente el material de autenticación con una política explícita de vigencia y revocación.",
    "topic": "edge",
    "aliases": [
      "JWT",
      "JSON web token",
      "Token web JSON",
      "token web JSON",
      "declaraciones de autenticación"
    ]
  },
  {
    "term": "NIC",
    "expansion": "Controlador de interfaz de red",
    "category": "Redes",
    "definition": "El hardware que envía y recibe el tráfico de red de un servidor. La velocidad del enlace y su ubicación pueden limitar las transferencias de tensores entre nodos.",
    "context": "La NIC del nodo transporta tráfico de red, como las transferencias de KV compatible y la comunicación entre nodos.",
    "topic": "nic",
    "aliases": [
      "NIC",
      "network interface card",
      "network adapter",
      "Controlador de interfaz de red",
      "controlador de interfaz de red",
      "tarjeta de red",
      "adaptador de red"
    ]
  },
  {
    "term": "RDMA",
    "expansion": "Acceso directo a memoria remota",
    "category": "Redes",
    "definition": "Un mecanismo de red que puede transferir datos directamente desde o hacia memoria registrada en otro extremo, con menor intervención de la CPU. Siguen siendo aplicables las reglas de registro, protección y sincronización.",
    "context": "RDMA puede transportar tensores entre nodos, pero no hace que la red sea equivalente a la HBM local.",
    "topic": "nic",
    "aliases": [
      "RDMA",
      "remote direct memory access",
      "Acceso directo a memoria remota",
      "acceso directo a memoria remota"
    ]
  },
  {
    "term": "GPUDirect RDMA",
    "expansion": "Acceso de red directo a memoria de GPU de NVIDIA",
    "category": "Redes",
    "definition": "Tecnología de NVIDIA que permite a un dispositivo de red compatible acceder a la memoria de GPU sin hacer pasar los datos por la DRAM del anfitrión. La topología, el registro de memoria y el orden de visibilidad de las operaciones siguen siendo importantes.",
    "context": "La ruta de transferencia entre la NIC y la GPU puede evitar un búfer intermedio de copia en la memoria del anfitrión.",
    "topic": "nic",
    "aliases": [
      "GPUDirect RDMA",
      "GPUDirect",
      "GPU Direct",
      "Acceso de red directo a memoria de GPU de NVIDIA",
      "acceso directo a memoria de GPU",
      "red directa de GPU"
    ]
  },
  {
    "term": "PCIe",
    "expansion": "Interconexión rápida de componentes periféricos",
    "category": "Redes",
    "definition": "Una interconexión local basada en paquetes que conecta procesadores, aceleradores y dispositivos periféricos. La generación del enlace, el número de carriles y la topología determinan sus límites de transferencia.",
    "context": "PCIe Gen5 x16 ofrece unos 64 GB/s teóricos en un sentido antes de la sobrecarga, no 128 GB/s en un único sentido.",
    "topic": "pcie",
    "aliases": [
      "PCIe",
      "PCI Express",
      "PCIe Gen5",
      "x16",
      "Interconexión rápida de componentes periféricos",
      "interconexión de componentes periféricos",
      "bus PCIe"
    ]
  },
  {
    "term": "NVLink",
    "expansion": "Interconexión de GPU NVLink de NVIDIA",
    "category": "Redes",
    "definition": "La interconexión de alto ancho de banda de NVIDIA utilizada para la comunicación directa entre GPU compatibles. El ancho de banda agregado anunciado puede sumar ambos sentidos y no debe interpretarse como una tasa de datos útiles de la aplicación en un solo sentido.",
    "context": "El ejemplo H100 SXM indica 900 GB/s de ancho de banda NVLink agregado bidireccional por GPU.",
    "topic": "nvlink",
    "aliases": [
      "NVLink",
      "NVLink fabric",
      "Interconexión de GPU NVLink de NVIDIA",
      "interconexión NVLink",
      "red NVLink"
    ]
  },
  {
    "term": "NVSwitch",
    "expansion": "Hardware de conmutación NVLink de NVIDIA",
    "category": "Redes",
    "definition": "Hardware de conmutación que conecta varias GPU compatibles con NVLink en sistemas admitidos. Facilita rutas de comunicación directa, aunque el rendimiento de las operaciones colectivas sigue dependiendo de la carga y de la implementación.",
    "context": "Los ocho rangos de GPU de referencia intercambian tráfico de operaciones colectivas mediante una red interna del nodo de tipo NVSwitch.",
    "topic": "nvlink",
    "aliases": [
      "NVSwitch",
      "NVSwitch fabric",
      "Hardware de conmutación NVLink de NVIDIA",
      "conmutación NVLink",
      "red NVSwitch"
    ]
  },
  {
    "term": "NCCL",
    "expansion": "Biblioteca de comunicaciones colectivas de NVIDIA",
    "category": "Redes",
    "definition": "Una biblioteca que implementa entre GPU operaciones de comunicación como reducción global, difusión y recopilación global. Los rangos participantes deben ejecutar operaciones colectivas compatibles.",
    "context": "Las capas con paralelismo tensorial combinan resultados de activaciones locales de cada rango; por eso, un rango bloqueado puede bloquear a todo el grupo.",
    "topic": "tp",
    "aliases": [
      "NCCL",
      "NVIDIA NCCL",
      "collective library",
      "Biblioteca de comunicaciones colectivas de NVIDIA",
      "biblioteca de comunicaciones colectivas",
      "comunicaciones colectivas"
    ]
  },
  {
    "term": "DMA",
    "expansion": "Acceso directo a memoria",
    "category": "Redes",
    "definition": "Un mecanismo que mueve datos entre la memoria y un dispositivo sin que la CPU copie cada byte. El envío asíncrono no garantiza el solapamiento si las dependencias y el hardware no lo permiten.",
    "context": "Los búferes reutilizables del anfitrión, fijados en memoria, permiten solapar de forma deliberada las transferencias y el trabajo de la GPU.",
    "topic": "pcie",
    "aliases": [
      "DMA",
      "asynchronous DMA",
      "Acceso directo a memoria",
      "acceso directo a memoria",
      "DMA asíncrono"
    ]
  },
  {
    "term": "TX / RX",
    "expansion": "Transmisión / recepción",
    "category": "Redes",
    "definition": "Los sentidos en los que un dispositivo envía y recibe datos. Para interpretar los contadores correctamente, hay que indicar el punto de observación, el intervalo de tiempo y la unidad.",
    "context": "Los contadores TX/RX de PCIe y de las NIC ayudan a identificar la ruta real de transferencia y su saturación.",
    "topic": "nic",
    "aliases": [
      "TX / RX",
      "TX/RX",
      "TX",
      "RX",
      "Transmisión / recepción",
      "transmisión recepción",
      "transmisión",
      "recepción"
    ]
  },
  {
    "term": "I/O",
    "expansion": "Entrada / salida",
    "category": "Redes",
    "definition": "El movimiento de datos entre un componente y otras partes del sistema. Al hablar de algoritmos de GPU, puede referirse específicamente al tráfico entre niveles de la jerarquía de memoria.",
    "context": "La optimización de entrada y salida de FlashAttention reduce el tráfico de HBM, sin eliminar el cálculo matemático de la atención.",
    "topic": "flash",
    "aliases": [
      "I/O",
      "IO",
      "input output",
      "Entrada / salida",
      "E/S",
      "entrada salida"
    ]
  },
  {
    "term": "BF16",
    "expansion": "Punto flotante Brain de 16 bits (bfloat16)",
    "category": "Unidades y formatos",
    "definition": "Un formato de punto flotante de 16 bits con el mismo número de bits de exponente que el formato estándar de 32 bits, y menos bits de precisión. Ocupa dos bytes por valor.",
    "context": "La configuración de partida utiliza BF16 para pesos y KV, y calcula por separado los bytes de los pesos y de la caché antes de la sobrecarga.",
    "topic": "precision",
    "aliases": [
      "BF16",
      "bfloat16",
      "brain float16",
      "Punto flotante Brain de 16 bits (bfloat16)",
      "punto flotante Brain",
      "formato bfloat16"
    ]
  },
  {
    "term": "FP8",
    "expansion": "Punto flotante de 8 bits",
    "category": "Unidades y formatos",
    "definition": "Una familia de formatos de punto flotante de un byte, con precisión y rango limitados. Su uso práctico puede requerir escalado, rutinas de cómputo específicas del formato y evaluación de la calidad de los resultados.",
    "context": "Un formato KV de un byte reduce aproximadamente a la mitad su almacenamiento base frente a BF16; no cambia automáticamente el máximo de cómputo del modelo.",
    "topic": "precision",
    "aliases": [
      "FP8",
      "8-bit floating point",
      "FP8 KV",
      "Punto flotante de 8 bits",
      "punto flotante de 8 bits",
      "KV FP8"
    ]
  },
  {
    "term": "INT8 / INT4",
    "expansion": "Representación entera de 8 bits / 4 bits",
    "category": "Unidades y formatos",
    "definition": "Representaciones enteras de ocho o cuatro bits por valor, a menudo utilizadas con factores de escala de cuantización para los pesos del modelo. Los pesos empaquetados pueden convertirse a otro formato aritmético dentro de la rutina de cómputo.",
    "context": "La calculadora de almacenamiento permite pesos de un byte o de medio byte, sin suponer un aumento equivalente en la tasa de cálculo aritmético.",
    "topic": "precision",
    "aliases": [
      "INT8 / INT4",
      "INT8",
      "INT4",
      "8-bit",
      "4-bit",
      "weight-only quantization",
      "Representación entera de 8 bits / 4 bits",
      "enteros de 8 bits",
      "enteros de 4 bits",
      "cuantización solo de pesos"
    ]
  },
  {
    "term": "FP16",
    "expansion": "Punto flotante de 16 bits",
    "category": "Unidades y formatos",
    "definition": "Un formato de punto flotante de dos bytes, normalmente IEEE binary16, con un equilibrio entre rango y precisión distinto del de BF16. Que ambos ocupen los mismos bytes no los hace numéricamente intercambiables.",
    "context": "FP16 sirve como comparación de precisión; el cálculo de referencia utiliza explícitamente el rendimiento de hardware para operaciones densas BF16.",
    "topic": "precision",
    "aliases": [
      "FP16",
      "float16",
      "half precision",
      "Punto flotante de 16 bits",
      "punto flotante de 16 bits",
      "media precisión"
    ]
  },
  {
    "term": "bit",
    "expansion": "Dígito binario",
    "category": "Unidades y formatos",
    "definition": "Un valor binario, representado convencionalmente con una b minúscula en las unidades de ancho de banda. Ocho bits forman un byte.",
    "context": "Un enlace de red de 400 Gb/s tiene un límite teórico de 50 GB/s en bytes antes de la sobrecarga del protocolo.",
    "topic": "nic",
    "aliases": [
      "bit",
      "bits",
      "b",
      "Dígito binario",
      "dígito binario"
    ]
  },
  {
    "term": "byte",
    "expansion": "Ocho bits",
    "category": "Unidades y formatos",
    "definition": "Una unidad de almacenamiento de ocho bits, representada convencionalmente con una B mayúscula. El almacenamiento de tensores depende de los bytes por valor y del número de valores almacenados.",
    "context": "BF16 utiliza dos bytes por valor, mientras que un peso empaquetado de cuatro bits utiliza medio byte antes de los metadatos y la alineación.",
    "topic": "precision",
    "aliases": [
      "byte",
      "bytes",
      "B",
      "Ocho bits",
      "octeto",
      "ocho bits"
    ]
  },
  {
    "term": "KB / MB / GB / TB",
    "expansion": "Kilobyte / megabyte / gigabyte / terabyte decimales",
    "category": "Unidades y formatos",
    "definition": "Unidades decimales de almacenamiento: un KB equivale a 1 000 bytes; un MB, a un millón; un GB, a mil millones; y un TB, a un billón. Se diferencian de las unidades binarias, como GiB.",
    "context": "En este ejemplo, la capacidad de 80 GB y el ancho de banda de 3,35 TB/s del hardware utilizan unidades decimales.",
    "topic": "hbm",
    "aliases": [
      "KB / MB / GB / TB",
      "MB",
      "GB",
      "TB",
      "KB",
      "kilobyte",
      "megabyte",
      "gigabyte",
      "terabyte",
      "Kilobyte / megabyte / gigabyte / terabyte decimales",
      "unidades decimales",
      "kilobyte decimal",
      "gigabyte decimal"
    ]
  },
  {
    "term": "KiB / MiB / GiB",
    "expansion": "Kibibyte / mebibyte / gibibyte binarios",
    "category": "Unidades y formatos",
    "definition": "Unidades binarias de almacenamiento: un KiB equivale a 1 024 bytes; un MiB, a 1 048 576; y un GiB, a 1 073 741 824. Antes de comparar numéricamente una cantidad binaria con una unidad decimal como GB, hay que convertirla.",
    "context": "La caché BF16 ocupa 320 KiB por token en todo el modelo; una secuencia de 8 192 tokens utiliza 2,5 GiB antes de la sobrecarga.",
    "topic": "kv-layout",
    "aliases": [
      "KiB / MiB / GiB",
      "KiB",
      "GiB",
      "MiB",
      "kibibyte",
      "gibibyte",
      "Kibibyte / mebibyte / gibibyte binarios",
      "unidades binarias",
      "kibibyte binario",
      "gibibyte binario",
      "mebibyte"
    ]
  },
  {
    "term": "Gb/s",
    "expansion": "Gigabits por segundo",
    "category": "Unidades y formatos",
    "definition": "Una tasa decimal de mil millones de bits por segundo. Dividirla por ocho convierte la tasa ideal de bits a bytes por segundo, antes de la sobrecarga.",
    "context": "La NIC de 400 Gb/s del ejemplo corresponde como máximo a 50 GB/s en un sentido a la velocidad nominal del enlace.",
    "topic": "nic",
    "aliases": [
      "Gb/s",
      "Gbps",
      "400 Gb/s",
      "gigabits per second",
      "Gigabits por segundo",
      "gigabits por segundo"
    ]
  },
  {
    "term": "GB/s / TB/s",
    "expansion": "Gigabytes / terabytes por segundo",
    "category": "Unidades y formatos",
    "definition": "Tasas decimales de transferencia de bytes, no capacidades de almacenamiento. Una tasa publicada puede ser un máximo teórico o una suma de ambos sentidos, por lo que importa cómo se define.",
    "context": "El simulador aplica un supuesto explícito de eficiencia al ancho de banda HBM de 3,35 TB/s anunciado para H100.",
    "topic": "hbm",
    "aliases": [
      "GB/s / TB/s",
      "GB/s",
      "TB/s",
      "gigabytes per second",
      "terabytes per second",
      "Gigabytes / terabytes por segundo",
      "gigabytes por segundo",
      "terabytes por segundo"
    ]
  },
  {
    "term": "FLOP / FLOP/s",
    "expansion": "Operación de punto flotante / operaciones por segundo",
    "category": "Unidades y formatos",
    "definition": "Un FLOP cuenta una operación aritmética; FLOP/s es la tasa a la que se realizan esas operaciones. Según la convención utilizada aquí, una multiplicación y suma fusionadas cuentan como dos operaciones.",
    "context": "La estimación del límite de rendimiento compara la cantidad de operaciones necesarias con una tasa efectiva de cómputo supuesta.",
    "topic": "sm",
    "aliases": [
      "FLOP / FLOP/s",
      "FLOP",
      "FLOPs",
      "FLOP/s",
      "FLOPS",
      "floating-point operations",
      "Operación de punto flotante / operaciones por segundo",
      "operación de punto flotante",
      "operaciones por segundo",
      "operaciones de punto flotante"
    ]
  },
  {
    "term": "TFLOP/s",
    "expansion": "Un billón de operaciones de punto flotante por segundo",
    "category": "Unidades y formatos",
    "definition": "Una tasa de cómputo equivalente a un billón (10¹²) de operaciones de punto flotante por segundo. Las cifras de hardware deben indicar la precisión aritmética y si suponen dispersión estructurada.",
    "context": "El ejemplo utiliza aproximadamente 989 TFLOP/s de BF16 denso por H100 SXM antes de aplicar el supuesto de eficiencia.",
    "topic": "sm",
    "aliases": [
      "TFLOP/s",
      "TFLOP",
      "TFLOPS",
      "teraflops",
      "TFLOPs",
      "Un billón de operaciones de punto flotante por segundo",
      "billón de operaciones por segundo",
      "teraoperaciones de punto flotante"
    ]
  },
  {
    "term": "GEMM",
    "expansion": "Multiplicación general de matrices",
    "category": "Unidades y formatos",
    "definition": "Una operación matricial estándar que multiplica dos matrices y puede combinar el resultado con otra matriz escalada. Las operaciones matriciales grandes y con dimensiones adecuadas pueden reutilizar cada valor cargado en muchas operaciones aritméticas.",
    "context": "Las proyecciones del transformador y los MLP utilizan multiplicaciones de matrices cuyas dimensiones cambian entre el prellenado y la decodificación.",
    "topic": "sm",
    "aliases": [
      "GEMM",
      "GEMMs",
      "matrix multiply",
      "matrix multiplication",
      "Multiplicación general de matrices",
      "multiplicación de matrices",
      "producto matricial"
    ]
  },
  {
    "term": "p95 / p99",
    "expansion": "Percentil 95 / percentil 99",
    "category": "Unidades y formatos",
    "definition": "Umbrales de una distribución por debajo de los cuales, o en los que, se encuentra el 95 % o el 99 % de las observaciones. Revelan el comportamiento de los casos extremos que un promedio puede ocultar, pero promediar percentiles de réplicas no produce un percentil de toda la flota.",
    "context": "Mide los percentiles altos de la latencia hasta el primer token y de los intervalos entre tokens a partir de la distribución combinada de solicitudes que corresponda.",
    "topic": "telemetry",
    "aliases": [
      "p95 / p99",
      "p95",
      "p99",
      "percentile",
      "tail latency",
      "Percentil 95 / percentil 99",
      "percentil",
      "percentil 95",
      "percentil 99",
      "latencia en la cola de la distribución",
      "latencia extrema"
    ]
  }
];
