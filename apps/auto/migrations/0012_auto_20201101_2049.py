# Generated by Django 3.1.2 on 2020-11-01 23:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('auto', '0011_auto_20201101_0101'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
            options={
                'verbose_name': 'Categoría',
                'db_table': 'categoria',
                'ordering': ['id'],
            },
        ),
        migrations.AddField(
            model_name='auto',
            name='vendedor',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='auto',
            name='categoria',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='auto.categoria'),
        ),
    ]