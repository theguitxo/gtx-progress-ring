# Progress Ring

![Example image](./example.png)

---
## English
---

This component shows a ring with two circles, one is filled with a percent defined as a parameter.

Parameters:

* **size**: The diameter of the ring
* **strokeWidth**: Width of the stroke for the circles of the ring. This value is part of the size of the ring. E.g., in a component with a size of 100 and a stroke width of 5, the outer diameter of the ring is 100 and the inner diameter is 90 (100 - (5 * 2))
* **backColor**: Color for the circle as the background of the ring
* **frontColor**: Color for the circle that shows the percentage value of the ring
* **percent**: Percentage to show in the ring
* **direction**: Direction that the circle of percentage must to grow. This value can be *right* or *left*. If it's *right*, the circle will be grown in the same way of the clock needles, otherwise, if the value is *left*, the circle will be growns it the opposite way
* **showPercentText**: To show or not, into the inner circle, a text with the percentage that is shown in the ring
* **useAnimation**: To animate the stroke from 0 to the value as received as a parameter when the component is inserted or when the percentage is changed

---

## Test the component

Clon this repository and, into the folder of the project, run `ng serve` for start the dev server and modify the file *app.component.html*. Navigate to `http://localhost:4200/` to see the result with the new values.

---
  
## NPM Package

This component is released as an NPM package. His url is:

[https://www.npmjs.com/package/gtx-progress-ring](https://www.npmjs.com/package/gtx-progress-ring)

You must install with the command:

`npm install gtx-progress-ring`

And add it to the imported modules of the app where you want use:

**app.module.ts:**
```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressRingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
**app.component.html:**

```
<gtx-progress-ring
  [percent]="33"
  [showPercentText]="true"
  [useAnimation]="true">
</gtx-progress-ring>
```
---
## Espa??ol
---

Este componente muestra un anillo con dos circulos, uno se rellena con un porcentaje recibido como par??metro.

Par??metros:

* **size**: El di??metro de anillo
* **strokeWidth**: Ancho de las l??neas para los circulos del anillo. Este valor es parte del tama??o del anillo. P. ej., en un componente con una tama??o de 100 y un ancho de l??nea de 5, el di??metro exterior es de 100 y el di??metro interior es de 90 (100 - (5 * 2))
* **backColor**: Color del c??rculo usado como fondo el anillo
* **frontColor**: Color del c??culo que muestra el valor de porcentaje del anillo
* **percent**: Porcentaje a mostrar en el anillo
* **direction**: Direcci??n que tomar?? el c??culo que muestra el porcentaje. Este valor puede ser *right* o *left*. Si es *right*, el c??culo crecera en el sentido de las agujas del reloj, por el contrario, si el valor es *left*, el c??culo crecera en el sentido contrario
* **showPercentText**: Para mostrar o no, dentro del c??rculo interior, un texto con el porcentaje que muestra el anillo
* **useAnimation**: Para animar el trazjo de 0 hasta el valor recibibo como par??ametro cuando se inerta el componente o cuando el porcentaje cambia

---

## Probar el componente

Clone este repositorio y, dentro del directorio del proyecto, ejecute `ng serve` para iniciar el servidor de desarrollo y modifique el *fichero app.component.html*. Navegue a `http://localhost:4200/` para ver el resultado con los nuevos valores.

---

## Paquete NPM

Este componente est?? publicado como paquete NPM. Su url es:

[https://www.npmjs.com/package/gtx-progress-ring](https://www.npmjs.com/package/gtx-progress-ring)

Instale el componente mediante el siguiente comando:

`npm install gtx-progress-ring`

Y a??adalo a los m??dulos importados de la aplicaci??n donde quiera usarlo:

**app.module.ts:**
```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressRingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
**app.component.html:**

```
<gtx-progress-ring
  [percent]="33"
  [showPercentText]="true"
  [useAnimation]="true">
</gtx-progress-ring>
```
