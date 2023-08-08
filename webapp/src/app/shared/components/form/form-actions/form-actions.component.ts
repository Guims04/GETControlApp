import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
})
export class FormActionsComponent {
  // atributtes
  @Input() form: FormGroup = this.fb.group({});
  @Input() showSubmit: boolean = true;
  @Input() showCancel: boolean = true;
  @Input() showDelete: boolean = true;

  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  // modalRef: BsModalRef;
  private subscriptions: Subscription = new Subscription();

  // constructor
  constructor(
    private fb: FormBuilder,
    //private messagesService: MessagesService,
    private formService: FormService //private modalService: BsModalService
  ) {}

  // angular methods
  ngOnInit(): void {
    this.subscriptions.add(
      this.form.valueChanges.subscribe(() => this.form.markAsDirty())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // our methods
  cancelForm(): void {
    // if (this.form.dirty) this.openDataLossModal();
    // else this.onCancel.emit();
    this.onCancel.emit();
  }

  deleteForm(): void {
    this.onDelete.emit();
    //this.modalRef.hide();
  }

  // openConfirmationModal() {
  //   const config = {
  //     class: 'modal-sm',
  //     ignoreBackdropClick: true,
  //     initialState: {
  //       title: 'Confirmar Exclusão',
  //       msg: 'Você deseja realmente excluir este item?',
  //       onConfirm: () => this.deleteForm(),
  //       onCancel: () => this.closeConfirmationModal(),
  //     },
  //   };

  //   this.modalRef = this.modalService.show(ModalConfirmationComponent, config);
  // }

  // closeConfirmationModal() {
  //   this.modalRef.hide();
  // }

  // openDataLossModal() {
  //   const config = {
  //     class: 'modal-sm',
  //     ignoreBackdropClick: true,
  //     initialState: {
  //       title: 'Dados não salvos',
  //       msg: 'Os dados do formulário foram alterados, deseja sair e perder os dados não salvos?',
  //       onConfirm: () => {
  //         this.onCancel.emit();
  //         // this.modalRef.hide();
  //       },
  //       onCancel: () => this.closeConfirmationModal(),
  //       buttonCancel: 'Não Sair',
  //       buttonConfirm: 'Sair',
  //     },
  //   };

  //   this.modalRef = this.modalService.show(ModalConfirmationComponent, config);
  // }
}
