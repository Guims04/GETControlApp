import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private renderer: Renderer2; // Instância do Renderer2 para manipulação do DOM
  private isDarkModeSubject: BehaviorSubject<boolean>; // Subject para armazenar o valor do modo escuro
  public isDarkMode$: Observable<boolean>; // Observable para notificar sobre alterações no modo escuro

  constructor(
    private rendererFactory: RendererFactory2
  ) {
    // Criação do Renderer2
    this.renderer = this.rendererFactory.createRenderer(null, null);

    // Obtém o valor inicial do modo escuro a partir do localStorage
    const isDarkMode = localStorage.getItem('GETControlDarkMode') === 'true';

    // Inicializa o BehaviorSubject com o valor inicial
    this.isDarkModeSubject = new BehaviorSubject<boolean>(isDarkMode);

    // Cria o Observable a partir do BehaviorSubject
    this.isDarkMode$ = this.isDarkModeSubject.asObservable();

    // Adiciona um listener para detectar alterações no localStorage
    window.addEventListener('storage', (event) => {
      // Verifica se a alteração é referente ao 'GETControlDarkMode'
      if (event.key === 'GETControlDarkMode') {
        const newValue = event.newValue === 'true';
        // Atualiza o valor no BehaviorSubject
        this.isDarkModeSubject.next(newValue);
        // Atualiza a classe do <body>
        this.updateBodyClass(newValue);
      }
    });

    // Aplica a classe inicial no carregamento do serviço
    this.updateBodyClass(isDarkMode);
  }

  setDarkMode(value: boolean): void {
    // Atualiza o valor no localStorage
    localStorage.setItem('GETControlDarkMode', value.toString());
    // Atualiza o valor no BehaviorSubject
    this.isDarkModeSubject.next(value);
    // Atualiza a classe do <body>
    this.updateBodyClass(value);
  }

  private updateBodyClass(isDarkMode: boolean): void {
    if (isDarkMode) {
      // Adiciona a classe 'dark-mode' ao <body>
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      // Remove a classe 'dark-mode' do <body>
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

}
