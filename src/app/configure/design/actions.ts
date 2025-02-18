'use server'

import { db } from '@/db'
import { ShirtColor, FabricMaterial, ShirtSize, ShirtFit } from '../../../../prisma/generated/enums'

export type SaveConfigArgs = {
  color: ShirtColor
  material: FabricMaterial
  size: ShirtSize
  fit: ShirtFit
  configId: string
}

export async function saveConfig({
  color,
  material,
  size,
  fit,
  configId,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: { color, material, size, fit },
  })
}