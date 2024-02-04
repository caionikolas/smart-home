-- CreateTable
CREATE TABLE "Local" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ambient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "localId" TEXT,
    CONSTRAINT "Ambient_localId_fkey" FOREIGN KEY ("localId") REFERENCES "Local" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Devices" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "online" BOOLEAN NOT NULL,
    "ligado" BOOLEAN NOT NULL,
    "ambientId" TEXT,
    CONSTRAINT "Devices_ambientId_fkey" FOREIGN KEY ("ambientId") REFERENCES "Ambient" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
