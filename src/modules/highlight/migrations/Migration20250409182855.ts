import { Migration } from '@mikro-orm/migrations';

export class Migration20250409182855 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "highlight" ("id" text not null, "title" text not null, "url" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "highlight_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_highlight_deleted_at" ON "highlight" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "highlight" cascade;`);
  }

}
