import { Schema, ValidationError } from 'yup'

export function syncValidation<T>(values: T, validationSchema: Schema<T>) {
   try {
      validationSchema.validateSync(values, { abortEarly: true })
      return true
   } catch (err) {
      return err.inner
   }
}
