$(document).ready(function(){
    const navBar = $(".nav-bar");
    const originalHeight = navBar.height();  // Guarda la altura original de la barra de navegación
  
    navBar.height(0);  // Establece la altura inicial de la barra de navegación a 0
  
    $(".fa-bars-staggered").click(function(event){
      event.stopPropagation();  // Evita que el evento de clic se propague al documento
      if (navBar.height() === 0) {
        navBar.height(originalHeight);  // Usa la altura original para mostrar la barra de navegación
      } else {
        navBar.height(0);  // Establece la altura a 0 para ocultar la barra de navegación
      }
    });
  
    $(document).click(function() {
      navBar.height(0);  // Establece la altura a 0 para ocultar la barra de navegación cuando se hace clic fuera
    });
  
    navBar.click(function(event){
      event.stopPropagation();  // Evita que el evento de clic se propague al documento
    });
  });
  
  var cantidadValores = document.getElementById('rangeInput').value;
  var valores = generarArreglo(1, cantidadValores);
  var contenedor = document.getElementById('contenedor');
  //var tamanoBarra = document.getElementById('barra').style.width = (750 / cantidadValores) + 'px';
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let i, j;

function generarArreglo(inicio, fin) {
    let arr = [];
  for (let i = inicio; i <= fin; i++) {
    arr.push(i);
  }
  return arr;
}
  
  async function desordenarArreglo() {
  for (let i = valores.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = valores[i];
      valores[i] = valores[j];
      valores[j] = temp;
  
    crearBarras(document.getElementById('rangeInput').value);
  
    await delay(2500 / cantidadValores);
  }
  }
  
  function crearBarras(cantidad) {
  
  
  while (contenedor.firstChild) {
    contenedor.firstChild.remove();
  }

      let anchoBarra = contenedor.offsetWidth / cantidad;
  
  valores.forEach((valor) => {
      const barra = document.createElement('div');
      let alturaBarra = valor * (380 / cantidad) + 'px';
    
    barra.style.width = anchoBarra + 'px';
    barra.style.height = alturaBarra;
    barra.style.background = 'linear-gradient(to top, #333, white)' 
    barra.classList.add('barra');
    
  
    contenedor.appendChild(barra);
  });
  }
  
  async function insertionSort() {
  
  for (i = 1; i < valores.length; i++) {
      for (j = i; j > 0 && valores[j - 1] > valores[j]; j--) {

          const temp = valores[j];
          valores[j] = valores[j - 1];
          valores[j - 1] = temp;
  
          crearBarras(document.getElementById('rangeInput').value);
  
          await delay(2500 / cantidadValores);
      }
      j = 0;
      
      crearBarras(document.getElementById('rangeInput').value);
  }
  }
  
  async function bubbleSort() {
  for(let i = 0; i < valores.length; i++) {
      let j;
      for(j = 0; j < ( valores.length - i -1 ); j++) {
          if(valores[j] > valores[j+1]) {
              const temp = valores[j];
              valores[j] = valores[j + 1]
            valores[j+1] = temp
          }
          crearBarras(document.getElementById('rangeInput').value);
  
          await delay(2500 / cantidadValores);
      }
      j = 0;
      
      crearBarras(document.getElementById('rangeInput').value);
  }
  }
  
  async function selectionSort() {
  for (let i = 0; i < valores.length; i++) {
      let min = i;
      for (let j = i + 1; j < valores.length; j++) {
          if (valores[min] > valores[j]) {
              min = j;
          }
      }
      if (i !== min) {
          [valores[i], valores[min]] = [valores[min], valores[i]];
  
          // Actualizar visualización y esperar
          crearBarras(document.getElementById('rangeInput').value);
          await delay(5000 / cantidadValores);
      }
  }
  }
  
  async function heapSort() {
  let size = valores.length;
  
  for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
      await heapify(valores, size, i);
  
  for (let i = size - 1; i >= 0; i--) {
      let temp = valores[0];
      valores[0] = valores[i];
      valores[i] = temp;
      await heapify(valores, i, 0);
  }
  crearBarras(document.getElementById('rangeInput').value);
  }
  
  async function heapify(array, size, i) {
  let max = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  
  if (left < size && array[left] > array[max])
      max = left;
  
  if (right < size && array[right] > array[max])
      max = right;
  
  if (max !== i) {
      let temp = array[i];
      array[i] = array[max];
      array[max] = temp;
  
      // Actualizar visualización y esperar
      crearBarras(document.getElementById('rangeInput').value);
      await delay(5000 / cantidadValores);
  
      await heapify(array, size, max);
  }
  }
  
  async function mergeSort() {
  await startMergeSort(valores, 0, valores.length - 1);
  }
  
  async function startMergeSort(arr, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    await startMergeSort(arr, start, mid);
    await startMergeSort(arr, mid + 1, end);
    await merge(arr, start, mid, end);
  }
  }
  
  async function merge(arr, start, mid, end) {
  let start2 = mid + 1;
  
  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      let value = arr[start2];
      let index = start2;
  
      while (index !== start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;
  
      // Actualizar visualización y esperar
      crearBarras(document.getElementById('rangeInput').value);
      await delay(5000 / cantidadValores);
  
      start++;
      mid++;
      start2++;
    }
  }
  // Actualizar visualización una última vez después de que se completa la fusión
  crearBarras(document.getElementById('rangeInput').value);
  }
  
  async function quickSort() { 
  await startQuickSort(valores, 0, valores.length - 1);
  }
  
  async function startQuickSort(array, start, end) {
  if (start >= end) {
    return array;
  }
      const rStart = start, rEnd = end;
      const pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];
      while (start < end) {
    while (array[start] <= pivot) start++;
    while (array[end] > pivot) end--;
    if (start < end) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;
  
      // Actualizar visualización y esperar
      crearBarras(document.getElementById('rangeInput').value);
      await delay(5000 / cantidadValores);
    }
  }
  await startQuickSort(array, rStart, start - 1);
  await startQuickSort(array, start, rEnd);
  
  // Actualizar visualización una última vez después de que se completa la ordenación
  crearBarras(document.getElementById('rangeInput').value);
  }
  
  function updateValue(val) {
  document.getElementById('displayValue').innerText = val;
  generarArreglo(1, val)
  cantidadValores = val;
  crearBarras(val);
  }
  
  window.onload = function() {
    const valorPorDefecto = document.getElementById('rangeInput').value;
    document.getElementById('displayValue').innerText = valorPorDefecto;
    crearBarras(valorPorDefecto);
  
  }
  
  document.getElementById('rangeInput').addEventListener('input', function() {
  crearBarras(this.value);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
  crearBarras(document.getElementById('rangeInput').value);
  desordenarArreglo();
  });
  
  window.addEventListener('resize', function() {
    crearBarras(document.getElementById('rangeInput').value);
  });