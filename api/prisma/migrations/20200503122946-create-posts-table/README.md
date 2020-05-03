# Migration `20200503122946-create-posts-table`

This migration has been generated at 5/3/2020, 12:29:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Post" (
    "body" TEXT NOT NULL  ,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL  
) 

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200503122946-create-posts-table
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+model Post {
+  id        Int      @default(autoincrement()) @id
+  title     String
+  body      String
+  createdAt DateTime @default(now())
+}
```


