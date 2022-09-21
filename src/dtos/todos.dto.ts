import { IsString, IsDateString, MaxLength, IsBoolean } from 'class-validator'
import { Trim } from 'class-sanitizer'

export class CreateTodoDto {
  @IsString()
  @Trim()
  title: string

  @IsString()
  @MaxLength(250)
  @Trim()
  description: string

  @IsDateString()
  @Trim()
  deadline: Date

  @IsBoolean()
  isDone: boolean
}

export class UpdateTodoDto {
  @IsString()
  @Trim()
  title?: string

  @IsString()
  @MaxLength(250)
  @Trim()
  description?: string

  @IsDateString()
  @Trim()
  deadline?: Date

  @IsBoolean()
  isDone?: boolean
}
