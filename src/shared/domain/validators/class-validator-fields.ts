import { validateSync, ValidationError } from 'class-validator';
import {
  FieldErrors,
  ValidatorFieldsInterface,
} from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsValidated extends object>
  implements ValidatorFieldsInterface<PropsValidated>
{
  public errors: FieldErrors | null = null;
  public validatedData: PropsValidated | null = null;

  public validate(data: PropsValidated): boolean {
    const errors: ValidationError[] = validateSync(data);
    if (errors.length) {
      this.errors = {};
      for (const error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints ?? {});
      }
    } else {
      this.validatedData = data;
    }
    return !errors.length;
  }
}
