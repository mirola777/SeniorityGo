# **SeniorityGo**
*******

**Tabla de Contenido**

1. [Introducción](#introduccion)
2. [Arquitectura](#arquitectura)
3. [Funcionamiento Backend](#funcionamientoback)

*******

<div id='introduccion'/> 

### **1. Introducción**

SeniorityGo se trata de un proyecto desarrollado para la materia Proyecto Integrador 2 mediante el uso de los frameworks Django (para el Backend) y Angular (para el Frontend). SeniorityGo busca hacer que la gestión del nivel del Seniority dentro de una organización sea mucho más sencilla. Este proyecto se encuentra desarrollado, mediante la adopción de Scrum, por el equipo de CapyDev.

- Stiven Yepes (Scrum Master)
- Juan Muñoz (Arquitecto)
- Isaac Tadina (Tester)
- José Blanco (Programador)
- Antonio Carmona (Programador)

El proyecto se encuentra bajo la supervisión de la consultora Softserve, de la mano de León Jaramillo.

*******


<div id='arquitectura'/> 

### **2. Arquitectura**
#### 2.1. Diagrama de componentes
![PokeClimbComponentsDiagram](https://user-images.githubusercontent.com/69641274/225128222-b740f10f-c551-4b1f-a14a-1a2f95462865.jpg)
#### 2.2 Diagrama de clases
![PokeClimbClasses (2)](https://user-images.githubusercontent.com/69641274/225128423-9299576f-35bb-4f24-91cb-2618e9b94e30.jpg)

*******

<div id='funcionamientoback'/>

### **3. Funcionamiento Backend**
#### 3.1. Organization
Para ingresar una Organization en la base de datos. Ingresa al siguiente enlace

```
localhost:8000/api/organization/create
```
El tipo de dato a ingresar es el siguiente. Este es un ejemplo de SoftServe, con una imagen de compañía. Cabe aclarar que este formato puede cambiar cuando se haga la subida de imágenes desde React hasta Django.

```json
{
    "name" : "SoftServe",
    "image" : "https://www.ccit.org.co/wp-content/uploads/softserve.jpg"
}
```

Si todo está correcto y no existe otra Organization con el mismo nombre, este debe retornar el siguiente json

```json
{
    "id" : 1,
    "name" : "SoftServe",
    "image" : "https://www.ccit.org.co/wp-content/uploads/softserve.jpg"
}
```

Para observar todas las Organizations registradas, accede a este enlace.
```
localhost:8000/api/organization/all
```

#### 3.2. Profile
Para ingresar un Profile a la organización, accede a este enlace.

```
localhost:8000/api/profile/create
```

Este es el format básico para crear un perfil técnico en la organización. El campo "organization" se trata de la id de la Organization a la que pertenece el Profile.

```json
{
    "name" : "Backend Dev",
    "description" : "Backend Developer who knows a lot of SQL and Django",
    "organization" : 1,
    "seniorities" : []
}
```

Este caso implica crear un perfil si Seniority Levels. Veamos un ejemplo que los traiga.


```json
{
    "name" : "Backend Dev",
    "description" : "Backend Developer who knows a lot of SQL and Django",
    "organization" : 1,
    "seniorities" : [
        {
            "seniority" : {
                "name" : "Junior",
                "level" : 1,
                "organization" : 1
            },
            "pokemon" : 25,
            "requirements" : []
        },
        {
            "seniority" : {
                "name" : "Semi Senior",
                "level" : 2,
                "organization" : 1
            },
            "pokemon" : 26,
            "requirements" : []
        },
        {
            "seniority" : {
                "name" : "Senior",
                "level" : 3,
                "organization" : 1
            },
            "pokemon" : 27,
            "requirements" : []
        }

    ]
}
```

Cabe recalcar que no se pueden tener Seniority Levels repetidos por Profile, ni mucho menos repetidos en la Organization. Siempre deberán ser distintos. También se ingresa el id del Pokemon para cada nivel, este tampoco puede ser repetido y no puede superar la id número 1000. Que es el valor límite de Pokemones permitidos por la PokeApi.

¿Qué ocurre si requieres añadir un Seniority Level ya creado a un nuevo perfil? Simplemente añade su id.

```json
{
    "name" : "Backend Dev",
    "description" : "Backend Developer who knows a lot of SQL and Django",
    "organization" : 1,
    "seniorities" : [
        {
            "seniority" : {
                "name" : "Pre-Junior",
                "level" : 0,
                "organization" : 1
            },
            "pokemon" : 25,
            "requirements" : []
        },
        {
            "seniority" : 2,
            "pokemon" : 26,
            "requirements" : []
        },
        {
            "seniority" : 3,
            "pokemon" : 27,
            "requirements" : []
        }

    ]
}
```

Puedes crear Seniority Levels y también reutilizar ya existentes como se puede ver arriba. 

Ahora es pertinente ver como añadir Requirements a cada Seniority Level de cada Profile. Para estos ejemplos, tendremos Seniority Levels ya creados para simplificar el Json.

```json
{
    "name" : "Backend Dev",
    "description" : "Backend Developer who knows a lot of SQL and Django",
    "organization" : 1,
    "seniorities" : [
        {
            "seniority" : 1,
            "pokemon" : 25,
            "requirements" : [
                {
                    "requirement" : {
                        "name" : "Learn about Internet",
                        "description" : "Be an expert surfing on the web",
                        "points" : 420,
                        "image" : "https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png",
                        "organization" : 1
                    }
                },
                {
                    "requirement" : {
                        "name" : "Learn about HTTP",
                        "description" : "Be an expert using GET, PUT, POST and DELETE",
                        "points" : 430,
                        "image" : "https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png",
                        "organization" : 1
                    }
                }
            ]
        },
        {
            "seniority" : 2,
            "pokemon" : 26,
            "requirements" : [
                {
                    "requirement" : {
                        "name" : "Learn about Java",
                        "description" : "Be an expert using Java",
                        "points" : 800,
                        "image" : "https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png",
                        "organization" : 1
                    }
                },
                {
                    "requirement" : {
                        "name" : "Learn about Python",
                        "description" : "Be an expert using Python",
                        "points" : 950,
                        "image" : "https://www.mindbreeze.com/sites/default/files/imagepicker/981/code10.png",
                        "organization" : 1
                    }
                }
            ]
        },
        {
            "seniority" : 3,
            "pokemon" : 27,
            "requirements" : [
                {
                    "requirement" : 8
                },
                {
                    "requirement" : 9
                },
                {
                    "requirement" : 12
                },
                {
                    "requirement" : 6
                },
                {
                    "requirement" : 14
                },
                {
                    "requirement" : 17
                }
            ]
        }

    ]
}
```

Como se puede ver, esta es la forma de añadir requirements dentro de un Seniority de cada Profile de forma automatica. Aunque también se puede hacer algo similar a lo que ocurre con Seniority Level, ya que puedes simplemente añadir el id de un requirement ya existente.

Es importante recordar que dentro de una Organization no pueden existir dos Requirements que tengan el mismo nombre, por lo que cuidado con esto. Otro detalle importante es que no se puede repetir ni un solo Requirement dentro de un Profile, todos deben de ser distintos obligatoriamente, claramente han sido programadas  estas reglas para evitar esto. Claramente se puede reutilizar un Requirement dentro de otro Profile de la misma Organization, pero solo podrá ser usado una sola vez en este. 
