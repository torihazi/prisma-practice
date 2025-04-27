-- AlterTable
ALTER TABLE "articles" ADD COLUMN     "organization_id" INTEGER;

-- CreateIndex
CREATE INDEX "articles_organization_id_idx" ON "articles"("organization_id");

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
