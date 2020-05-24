# Migration `20200509142436-create-contact`

This migration has been generated at 5/9/2020, 2:24:36 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Contact" (
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    "email" TEXT NOT NULL  ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL  ,
    "name" TEXT NOT NULL  
) 

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200503122946-create-posts-table..20200509142436-create-contact
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -15,4 +15,12 @@
   title     String
   body      String
   createdAt DateTime @default(now())
 }
+
+model Contact {
+  id        Int      @default(autoincrement()) @id
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
+}
```


