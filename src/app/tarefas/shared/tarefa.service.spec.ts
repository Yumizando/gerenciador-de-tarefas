import { TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.model';

describe('TarefaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefaService = TestBed.get(TarefaService);
    expect(service).toBeTruthy();
  });

  /*it('deve garantir que tarefa1 seja cadastrada',
    inject([TarefaService], (service: TarefaService) =>{
      let tarefa = new Tarefa(1, 'tarefa1', false);
      service.cadastrar(tarefa);
      let tarefa1 = service.buscarPorId(1);
      expect(tarefa1.id).toBeGreaterThan(0);
    })
  );*/

});
