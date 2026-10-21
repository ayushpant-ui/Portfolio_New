-- CreateTable
CREATE TABLE "PortfolioContact" (
    "id" SERIAL NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "subject" VARCHAR(200) NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PortfolioContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PortfolioContact_createdAt_idx" ON "PortfolioContact"("createdAt");
