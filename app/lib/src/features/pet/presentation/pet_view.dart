import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../widgets/async_value/async_value_builder.dart';
import '../application/pet_cubit.dart';

class PetView extends StatefulWidget {
  const PetView({Key? key}) : super(key: key);

  @override
  State<PetView> createState() => _PetViewState();
}

class _PetViewState extends State<PetView> {
  @override
  void initState() {
    super.initState();
    unawaited(context.read<PetCubit>().load());
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: const Text('Pets'),
        ),
        body: BlocBuilder<PetCubit, PetState>(
          builder: (context, state) => AsyncValueBuilder(
            state.pets,
            builder: (context, value) => ListView.builder(
              itemBuilder: (context, index) {
                final pet = value[index];
                return ListTile(
                  title: Text(pet.name),
                );
              },
              itemCount: value.length,
            ),
          ),
        ),
      );
}
